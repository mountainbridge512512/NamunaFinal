const Application = require('../models/application');
const path = require('path');

exports.createApplication = async (req, res) => {
  try {
    const { fullName, email, contactNumber, address, position, message } = req.body;
    const resumePath = req.file ? req.file.path : '';

    // Validate required fields
    if (!fullName || !email || !contactNumber || !position) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const application = new Application({
      fullName,
      email,
      contactNumber,
      address,
      position,
      message,
      resume: resumePath,
    });

    await application.save();

    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (err) {
    console.error('Error saving application:', err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'Duplicate application detected' });
    }
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getAllApplications = async (req, res, next) => {
  try {
    const applications = await Application.find().lean();

    // Get base URL for resume file access
    const BASE_URL = process.env.BASE_URL || 'http://localhost:5000';

    const applicationsWithResumeUrl = applications.map(app => ({
      ...app,
      resumeUrl: app.resume
        ? `${BASE_URL}/${app.resume.replace(/\\/g, '/')}` // Replace Windows backslashes with forward slashes
        : null,
    }));

    res.status(200).json(applicationsWithResumeUrl);
  } catch (err) {
    console.error('Error fetching applications:', err);
    next(err);
  }
};
exports.markAsRead = async (req, res) => {
  try {
    const applicationId = req.params.id;

    const application = await Application.findById(applicationId);
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }

    application.isRead = true; // assuming you have an isRead field in your schema
    await application.save();

    res.status(200).json({ message: 'Application marked as read' });
  } catch (err) {
    console.error('Error marking application as read:', err);
    res.status(500).json({ error: 'Server error' });
  }
};
