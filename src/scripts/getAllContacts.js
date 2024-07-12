import fs from 'fs/promises'; // імпортуємо fs промісна бібліотеку для роботи з файлами в Node.js
import { PATH_DB } from '../constants/contacts.js'; // імпортуємо константу PATH_DB зі значенням './src/db/db.json'

export const getAllContacts = async () => {
  // функція для отримання всіх контактів
  try {
    // Читання існуючих контактів з файлу
    const data = await fs.readFile(PATH_DB, 'utf-8'); // Читання існуючих контактів з файлу
    const contacts = JSON.parse(data); // Парсування рядка JSON у масив об'єктів
    return contacts; // Повернення масиву контактів
  } catch (error) {
    // Якщо помилка відбувається, то виводимо повідомлення про помилку
    console.error(`Failed to read contacts: ${error.message}`);
    return [];
  }
};

// Виклик функції для отримання всіх контактів
(async () => {
  console.log(await getAllContacts());
})();
