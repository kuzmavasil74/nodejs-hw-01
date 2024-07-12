import { faker } from '@faker-js/faker'; // імпортуємо функцію faker зі значенням '@faker-js/faker'

export const createFakeContact = () => ({
  // функція для створення об'єкту контакту
  id: faker.string.uuid(), // генеруємо унікальний ідентифікатор
  name: faker.person.fullName(), // генеруємо повне ім'я
  email: faker.internet.email(), // генеруємо пошту
  phone: faker.phone.number(), // генеруємо номер телефону
});
