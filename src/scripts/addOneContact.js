import fs from 'fs/promises';
import path from 'path';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    // Читання існуючих контактів з файлу
    let contacts = [];
    try {
      const data = await fs.readFile(PATH_DB, 'utf-8');
      contacts = JSON.parse(data);
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }

    // Генерація нового контакту і додавання його до масиву
    const newContact = createFakeContact();
    contacts.push(newContact);

    // Запис нового масиву контактів у файл
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(`New contact has been added and saved to ${PATH_DB}`);
  } catch (error) {
    console.error(`Failed to add contact: ${error.message}`);
  }
};

// Виклик функції для додавання одного контакту
addOneContact();
