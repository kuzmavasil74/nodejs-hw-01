import fs from 'fs/promises'; // імпортуємо fs промісна бібліотеку для роботи з файлами в Node.js
import { PATH_DB } from '../constants/contacts.js'; // імпортуємо константу PATH_DB зі значенням './src/db/db.json'

export const countContacts = async () => {
  // функція для підрахунку кількості контактів
  try {
    // Читання існуючих контактів з файлу
    const data = await fs.readFile(PATH_DB, 'utf-8'); // Читання існуючих контактів з файлу
    const contacts = JSON.parse(data); // Парсування JSON-даних в масив об'єктів

    // Повернення кількості контактів у масиві
    return contacts.length; //  Повернення кількості контактів у масиві
  } catch (error) {
    console.error(`Failed to count contacts: ${error.message}`); // Якщо помилка відбувається, то виводимо повідомлення про помилку
    return 0; // Повернення 0, якщо помилка відбувається
  }
};

// Виклик функції для підрахунку кількості контактів
(async () => {
  console.log(await countContacts());
})();
