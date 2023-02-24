const uuid = require('uuid');

const contacts = [
  {
    id: uuid.v4(),
    name: 'Gustavo',
    email: 'gustavo@email.com',
    phone: '121212121',
    category_id: uuid.v4(),
  }, {
    id: uuid.v4(),
    name: 'Larissa',
    email: 'larissa@email.com',
    phone: '2321324234',
    category_id: uuid.v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => { resolve(contacts); });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(
        contacts.find((contact) => contact.id === id),
      );
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(
        contacts.find((contact) => contact.email === email),
      );
    });
  }

  create({
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: uuid.v4(),
        name,
        email,
        phone,
        category_id,
      };

      contacts.push(category_id);

      resolve(newContact);
    });
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id, name, email, phone, category_id,
      };

      const updatedContacts = contacts.map((contact) => (
        contact.id === id ? updatedContact : contact
      ));

      resolve(updatedContacts);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
