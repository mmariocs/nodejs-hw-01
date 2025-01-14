import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const currentContacts = (await readContacts()) || [];
    const newContacts = Array.from({ length: number }, createFakeContact);
    const datedContacts = [...currentContacts, ...newContacts];
    await writeContacts(datedContacts);
    console.log(
      `${number} нових контактів успішно додано. Загальна кількість контактів: ${datedContacts.length}`,
    );
  } catch (error) {
    console.error('Помилка додавання даних до файлу:', error.message);
  }
};

generateContacts(5);
