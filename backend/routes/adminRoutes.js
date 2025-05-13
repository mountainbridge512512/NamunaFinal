const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const applicationController = require('../controllers/applicationController');
const authMiddleware = require('../middleware/authMiddleware');

// Protect all admin routes
router.use(authMiddleware);

router.get('/contacts', contactController.getAllContacts);
router.get('/applications', applicationController.getAllApplications);

module.exports = router;