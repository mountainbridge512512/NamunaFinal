// routes/adminRoutes.js
const express         = require('express');
const router          = express.Router();
const contactController     = require('../controllers/contactController');
const applicationController = require('../controllers/applicationController');
const adminController       = require('../controllers/adminController');
const authMiddleware        = require('../middleware/authMiddleware');

// Protect all of these routes
router.use(authMiddleware);

// Contacts & applications
router.get('/contacts',    contactController.getAllContacts);
router.get('/applications', applicationController.getAllApplications);

// Admin management
router.get('/admins',       adminController.getAllAdmins);        // <-- list all
router.get('/admins/:id',   adminController.getAdminById);        // <-- single
router.delete('/admins/:id', adminController.deleteAdmin);        // <-- delete

// Password update stays under /api/admin
router.put('/update-password', adminController.updatePassword);

module.exports = router;
