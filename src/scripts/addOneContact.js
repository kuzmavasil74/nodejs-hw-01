import fs from 'fs/promises'; // імпортуємо fs промісна бібліотеку для роботи з файлами в Node.js
import path from 'path'; // імпортуємо path бібліотеку для роботи з шляхами
import { PATH_DB } from '../constants/contacts.js'; // імпортуємо константу PATH_DB зі значенням './src/db/db.json'
import { createFakeContact } from '../utils/createFakeContact.js'; // імпортуємо функцію createFakeContact зі значенням '../utils/createFakeContact.js'

export const addOneContact = async () => {
  // функція addOneContact з параметром number (кількість контактів, які треба створити)
  try {
    // Читання існуючих контактів з файлу
    let contacts = []; // змінна contacts для зберігання контактів
    try {
      const data = await fs.readFile(PATH_DB, 'utf-8'); // читаємо дані з файлу db.json у змінну data та перетворюємо в рядоки UTF-8 якщо він є
      contacts = JSON.parse(data);
    } catch (error) {
      // якщо помилка відбувається, то виводимо повідомлення про помилку та вихід з функції addOneContact
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }

    // Генерація нового контакту і додавання його до масиву
    const newContact = createFakeContact(); // змінна newContact для зберігання нового контакту з функцією createFakeContact
    contacts.push(newContact); // додавання нового контакту до масиву contacts

    // Запис нового масиву контактів у файл
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2)); // записуємо нові контакти у db.json з кроком 2 (за замовчуванням) та відступами 2 (за замовчуванням) якщо він є
    console.log(`New contact has been added and saved to ${PATH_DB}`); //  виводимо повідомлення про створення та збереження нового контакту
  } catch (error) {
    console.error(`Failed to add contact: ${error.message}`); // якщо помилка відбувається, то виводимо повідомлення про помилку та вихід з функції addOneContact
  }
};

// Виклик функції для додавання одного контакту
addOneContact();
