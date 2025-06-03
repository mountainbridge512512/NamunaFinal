const Admin = require('../models/admin');
const Contact = require('../models/Contact');
const Application = require('../models/application');
const moment = require('moment'); // npm install moment

exports.getChartData = async (req, res) => {
  try {
    const days = 7;
    const chartData = [];

    for (let i = days - 1; i >= 0; i--) {
      const date = moment().subtract(i, 'days').startOf('day');
      const nextDate = moment(date).add(1, 'day');

      const applicationsCount = await Application.countDocuments({
        createdAt: { $gte: date.toDate(), $lt: nextDate.toDate() },
      });

      const queriesCount = await Contact.countDocuments({
        createdAt: { $gte: date.toDate(), $lt: nextDate.toDate() },
      });

      chartData.push({
        date: date.format('MMM D'), // e.g., "May 12"
        applications: applicationsCount,
        queries: queriesCount,
      });
    }

    res.json(chartData);
  } catch (error) {
    console.error('Error fetching chart data:', error);
    res.status(500).json({ message: 'Failed to fetch chart data' });
  }
};
exports.getDashboardStats = async (req, res) => {
  try {
    const adminsCount = await Admin.countDocuments();
    const queriesCount = await Contact.countDocuments();
    const applicationsCount = await Application.countDocuments();

    res.json({
      admins: adminsCount,
      queries: queriesCount,
      applications: applicationsCount,
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    res.status(500).json({ message: 'Failed to fetch dashboard stats' });
  }
};