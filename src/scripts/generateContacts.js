import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    // Читання існуючих контактів з файлу

    let contacts = [];

    try {
      const data = await fs.readFile(PATH_DB, 'utf-8');
      contacts = JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        contacts = [];
      }
    }

    // Генерація нових контактів

    for (let i = 0; i < number; i += 1) {
      contacts.push(createFakeContact());
    }

    // Запис нових контактів у файл

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(
      `${number} new contacts have been generated and saved to ${PATH_DB}`,
    );
  } catch (error) {
    console.error(`Failed to generate contacts: ${error.message}`);
  }
};
// Виклик функції для генерації 5 контактів, наприклад
generateContacts(5);

generateContacts(5);
