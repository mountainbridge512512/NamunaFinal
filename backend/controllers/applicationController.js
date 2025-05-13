const Application = require('../models/Application');

exports.createApplication = async (req, res, next) => {
  try {
    const application = new Application(req.body);
    await application.save();
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (err) {
    next(err);
  }
};

exports.getAllApplications = async (req, res, next) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.json(applications);
  } catch (err) {
    next(err);
  }
};
