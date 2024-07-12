import path from 'path'; // імпортуємо path бібліотеку для роботи з шляхами

//Перший варіант шляху до JSON-файлу
export const PATH_DB = path.join(process.cwd(), 'src', 'db', 'db.json'); // Шлях до JSON-файлу для зберігання контактів відносно поточного каталогу

// Другий варіант шляху до JSON-файлу
// export const PATH_DB = path.resolve(process.cwd(), 'src', 'db', 'db.json'); // Шлях до JSON-файлу для зберігання контактів відносно поточного каталогу
