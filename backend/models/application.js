const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNumber: {  // ✅ renamed from 'contact'
    type: String,
    unique: true,    // still unique, if needed
    required: true,
  },
  address: String,
  position: {
    type: String,
    required: true,
  },
   isRead: {
    type: Boolean,
    default: false,
  },
  message: String,
  resume: String,
}, { timestamps: true });
// Composite index to avoid duplicate applications by email and position
applicationSchema.index({ email: 1, position: 1 }, { unique: true });

const Application = mongoose.models.Application || mongoose.model('Application', applicationSchema);
module.exports = Application;