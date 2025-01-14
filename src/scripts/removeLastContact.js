import { writeContacts } from '../utils/writeContacts.js';
import { getAllContacts } from './getAllContacts.js';

export const removeLastContact = async () => {
  try {
    const allContacts = await getAllContacts();
    if (allContacts.length === 0) {
      console.log('Масив контактів порожній. Видалення не потрібне.');
      return;
    }
    allContacts.pop();
    await writeContacts(allContacts);
    console.log('Останній контакт успішно видалено.');
  } catch (error) {
    console.error('Помилка при видаленні останнього контакту:', error.message);
  }
};

removeLastContact();
