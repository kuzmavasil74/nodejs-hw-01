import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    // Читання існуючих контактів з файлу
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error(`Failed to read contacts: ${error.message}`);
    return [];
  }
};

// Виклик функції для отримання всіх контактів
(async () => {
  console.log(await getAllContacts());
})();
