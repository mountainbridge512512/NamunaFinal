const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  contactNumber: { type: String, required: true, unique: true, trim: true },
  address: { type: String, required: false, trim: true },
  position: { type: String, required: true, trim: true },
  message: { type: String, required: false },
  createdAt: { type: Date, default: Date.now }
}, {
  timestamps: true
});

// Composite index to avoid duplicate applications by email and position
applicationSchema.index({ email: 1, position: 1 }, { unique: true });

const Application = mongoose.models.Application || mongoose.model('Application', applicationSchema);
module.exports = Application;