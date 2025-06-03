const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');
const upload = require('../middleware/uploads');
const verifyToken  = require('../middleware/authMiddleware'); // ✅ Import the middleware


// Public route for users submitting applications
router.post('/', upload.single('resume'), applicationController.createApplication);

router.get('/', verifyToken, applicationController.getAllApplications);
router.put('/:id/read', verifyToken, applicationController.markAsRead);

module.exports = router;
