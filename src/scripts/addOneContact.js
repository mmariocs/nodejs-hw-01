import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

export const addOneContact = async () => {
  const dataOneNewContact = createFakeContact();

  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data || '[]');

    contacts.push(dataOneNewContact);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log('Новий контакт успішно додано до файлу.');
  } catch (error) {
    console.error('Помилка додавання даних до файлу:', error.message);
  }
};

addOneContact();
