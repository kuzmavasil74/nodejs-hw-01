import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    // Читання існуючих контактів з файлу
    const data = await fs.readFile(PATH_DB, 'utf-8');
    let contacts = JSON.parse(data);

    // Перевірка чи є елементи у масиві контактів
    if (contacts.length > 0) {
      // Видалення останнього контакту
      contacts.pop();

      // Запис оновленого масиву у файл
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
      console.log(`Last contact has been removed from ${PATH_DB}`);
    } else {
      console.log(`No contacts to remove in ${PATH_DB}`);
    }
  } catch (error) {
    console.error(`Failed to remove last contact: ${error.message}`);
  }
};

// Виклик функції для видалення останнього контакту
removeLastContact();
