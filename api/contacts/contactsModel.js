const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    phone: { type: String, required: true, unique: true },
    name: { type: String, required: true, default: 'Noname' },
  },
  { versionKey: false }
);

class Contact {
  constructor() {
    this.db = mongoose.model('phonebook', contactSchema);
  }
  getContacts = async () => {
    return await this.db.find();
  };
  getContactById = async contactId => {
    console.log('start ById:', contactId);
    return await this.db.findById(contactId);
  };
  createContact = async contactData => {
    console.log('modelcreateContact', contactData);
    return await this.db.create(contactData);
  };
  updateContact = async (contactId, contactData) => {
    return await this.db.findByIdAndUpdate(contactId, contactData, {
      new: true,
    });
  };
  deleteContact = async contactId => {
    return await this.db.findByIdAndRemove(contactId);
  };
}

module.exports = new Contact();
