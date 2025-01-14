import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  const jsonData = JSON.stringify(updatedContacts, null, 5);
  try {
    await fs.writeFile(PATH_DB, jsonData, 'utf-8');
    console.log('Дані успішно записані у файл.');
  } catch (error) {
    console.error('Помилка запису у файл:', error.message);
  }
};
