const Contact = require('../models/Contact');

// Create a new contact form entry
exports.createContact = async (req, res, next) => {
  try {
    // Create a new contact using the request body
    const contact = new Contact(req.body);
    
    // Save the contact data to the database
    await contact.save();
    
    // Send success response
    res.status(201).json({ message: 'Contact submitted successfully' });
  } catch (err) {
    // Handle errors and pass them to the error handler middleware
    next(err);
  }
};

// Fetch all contacts (optional, if you need to view the submissions)
exports.getAllContacts = async (req, res, next) => {
  try {
    // Retrieve all contact entries, sorted by creation date in descending order
    const contacts = await Contact.find().sort({ createdAt: -1 });
    
    // Send the contacts as the response
    res.json(contacts);
  } catch (err) {
    // Handle errors and pass them to the error handler middleware
    next(err);
  }
};
exports.deleteContact = async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Query not found' });
    res.status(200).json({ message: 'Query deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting contact query', error });
  }
};

exports.markAsRead = async (req, res) => {
  try {
    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Query not found' });
    res.status(200).json({ message: 'Marked as read', updated });
  } catch (error) {
    res.status(500).json({ message: 'Error marking query as read', error });
  }
};