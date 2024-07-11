import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    // Очищення масиву контактів
    const contacts = [];

    // Запис пустого масиву у файл
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(`All contacts have been removed from ${PATH_DB}`);
  } catch (error) {
    console.error(`Failed to remove contacts: ${error.message}`);
  }
};

// Виклик функції для видалення всіх контактів
removeAllContacts();
