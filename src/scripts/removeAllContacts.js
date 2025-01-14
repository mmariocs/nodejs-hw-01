import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, '[]', 'utf-8');
    console.log('Всі контакти успішно видалені.');
  } catch (error) {
    console.error('Помилка видалення файлу:', error.message);
  }
};

removeAllContacts();
