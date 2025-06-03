const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/signup', authController.register);
router.post('/login', authController.login);
router.get('/profile', authMiddleware, authController.getAdminProfile);

module.exports = router;
