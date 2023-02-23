const uuid = require('uuid');

const contacts = [
  {
    id: uuid.v4(),
    name: 'Gustvo',
    email: 'gustavo@email.com',
    phone: '121212121',
    category_id: uuid.v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => { resolve(contacts); });
  }
}

module.exports = new ContactsRepository();
