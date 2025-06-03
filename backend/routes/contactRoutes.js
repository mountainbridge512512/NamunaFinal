const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const verifyToken = require('../middleware/authMiddleware');

// Protected route to get all contact queries
router.get('/', verifyToken, contactController.getAllContacts);

// Public route to create a contact query (e.g., from frontend form)
router.post('/', contactController.createContact);

// Protected route to delete a contact query by ID
router.delete('/:id', verifyToken, contactController.deleteContact);

// Protected route to mark a contact query as read
router.put('/:id/read', verifyToken, contactController.markAsRead);

module.exports = router;
