const express = require('express');
const router = express.Router();
const { getDashboardStats, getChartData } = require('../controllers/dashboardController');
const verifyAdmin = require('../middleware/authMiddleware');

router.get('/stats', verifyAdmin, getDashboardStats);
router.get('/chart-data', verifyAdmin, getChartData);

module.exports = router;
