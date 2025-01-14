import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');

    const contacts = JSON.parse(data || '[]');

    if (!Array.isArray(contacts)) {
      throw new Error('Файл не містить масиву контактів');
    }

    const count = contacts.length;

    console.log(`Кількість контактів: ${count}`);
    return count;
  } catch (error) {
    console.error('Помилка при підрахунку контактів:', error.message);
    return 0;
  }
};
console.log(await countContacts());
