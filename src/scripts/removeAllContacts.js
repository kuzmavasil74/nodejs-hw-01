import fs from 'fs/promises'; //  імпортуємо fs промісна бібліотеку для роботи з файлами в Node.js
import { PATH_DB } from '../constants/contacts.js'; // імпортуємо константу PATH_DB зі значенням './src/db/db.json'

export const removeAllContacts = async () => {
  // функція для видалення всіх контактів
  try {
    // Очищення масиву контактів
    const contacts = []; // Створення пустого масиву

    // Запис пустого масиву у файл
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2)); // Запис пустого масиву у файл
    console.log(`All contacts have been removed from ${PATH_DB}`); // Виводимо повідомлення про видалення всіх контактів
  } catch (error) {
    // Якщо помилка відбувається, то виводимо повідомлення про помилку
    console.error(`Failed to remove contacts: ${error.message}`);
  }
};

// Виклик функції для видалення всіх контактів
removeAllContacts();
