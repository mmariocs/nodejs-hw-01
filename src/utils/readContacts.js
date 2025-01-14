import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const fileData = await fs.readFile(PATH_DB, 'utf8');
    console.log('Вміст файлу:', fileData);
  } catch (error) {
    console.error('Помилка читання файлу:', error.message);
  }
};
