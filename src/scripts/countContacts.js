import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    // Читання існуючих контактів з файлу
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    // Повернення кількості контактів у масиві
    return contacts.length;
  } catch (error) {
    console.error(`Failed to count contacts: ${error.message}`);
    return 0;
  }
};

// Виклик функції для підрахунку кількості контактів
(async () => {
  console.log(await countContacts());
})();
