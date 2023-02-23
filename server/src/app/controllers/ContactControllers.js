const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(req, res) {
    const contacts = await ContactsRepository.findAll();
    return res.json(contacts);
  }

  async show(req, res) {
    const { id } = req.params;
    const contact = await ContactsRepository.findById(id);
    return res.json(contact);
  }
}

module.exports = new ContactController();
