const { saveContact, getAllContacts } = require('../models/contactModel');

const submitContact = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, service, message } = req.body;

    if (!firstName || !lastName || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const contact = await saveContact({ firstName, lastName, email, phone, service, message });
    res.status(201).json({ message: 'Message received successfully', contact });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await getAllContacts();
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error getting contacts:', error);
    res.status(500).json({ error: 'Something went wrong.' });
  }
};

module.exports = { submitContact, getContacts };