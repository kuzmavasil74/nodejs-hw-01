import fs from 'fs/promises'; // імпортуємо fs промісна бібліотеку для роботи з файлами в Node.js
import { PATH_DB } from '../constants/contacts.js'; // імпортуємо константу PATH_DB зі значенням './src/db/db.json'

export const removeLastContact = async () => {
  // функція для видалення останнього контакту
  try {
    // Читання існуючих контактів з файлу
    const data = await fs.readFile(PATH_DB, 'utf-8'); // Читання існуючих контактів з файлу
    let contacts = JSON.parse(data); // Парсування рядка JSON у масив об'єктів

    // Перевірка чи є елементи у масиві контактів
    if (contacts.length > 0) {
      // Видалення останнього контакту
      contacts.pop();

      // Запис оновленого масиву у файл
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2)); // Запис оновленого масиву у файл
      console.log(`Last contact has been removed from ${PATH_DB}`); // Виводимо повідомлення про видалення останнього контакту
    } else {
      console.log(`No contacts to remove in ${PATH_DB}`); // Виводимо повідомлення про відсутність контактів
    }
  } catch (error) {
    console.error(`Failed to remove last contact: ${error.message}`); // Якщо помилка відбувається, то виводимо повідомлення про помилку
  }
};

// Виклик функції для видалення останнього контакту
removeLastContact();
