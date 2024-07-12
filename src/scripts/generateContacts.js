import fs from 'fs/promises'; //імпортуємо fs промісна бібліотеку для роботи з файлами в Node.js
import { PATH_DB } from '../constants/contacts.js'; //імпортуємо константу PATH_DB зі значенням './src/db/db.json'
import { createFakeContact } from '../utils/createFakeContact.js'; // імпортуємо функцію createFakeContact зі значенням '../utils/createFakeContact.js'

const generateContacts = async (number) => {
  // функція generateContacts з параметром number (кількість контактів, які треба створити)
  try {
    // Читання існуючих контактів з файлу
    let contacts = []; // змінна contacts для зберігання контактів
    try {
      const data = await fs.readFile(PATH_DB, 'utf-8'); // читаємо дані з файлу db.json у змінну data та перетворюємо в рядоки UTF-8 якщо він є
      contacts = JSON.parse(data);
    } catch (error) {
      // якщо помилка відбувається, то виводимо повідомлення про помилку та вихід з функції generateContacts
      if (error.code === 'ENOENT') {
        contacts = [];
      }
    }

    // Генерація нових контактів

    for (let i = 0; i < number; i += 1) {
      // цикл зі значенням i від 0 до number (кількість контактів, які треба створити) з кроком 1 (по замовчуванню) та додаємо до масиву contacts нові контакти з функцією createFakeContact
      contacts.push(createFakeContact());
    }

    // Запис нових контактів у файл

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2)); // записуємо нові контакти у db.json з кроком 2 (за замовчуванням) та відступами 2 (за замовчуванням) якщо він є
    console.log(
      `${number} new contacts have been generated and saved to ${PATH_DB}`, // виводимо повідомлення про створення та збереження нових контактів
    );
  } catch (error) {
    // якщо помилка відбувається, то виводимо повідомлення про помилку та вихід з функції generateContacts
    console.error(`Failed to generate contacts: ${error.message}`);
  }
};
// Виклик функції для генерації 5 контактів, наприклад
generateContacts(5); // виклик функції для генерації 5 контактів
