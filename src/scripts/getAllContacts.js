import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const fileData = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(fileData || '[]');
  } catch (error) {
    console.error('Помилка читання файлу:', error.message);
  }
};

console.log(await getAllContacts());
