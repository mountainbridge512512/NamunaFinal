const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  phone: { type: String, required: true, unique: true, trim: true },
  address: { type: String, required: false, trim: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  read: { type: Boolean, default: false },

}, {
  timestamps: true
});

// Index to prevent duplicate contacts by email or phone
contactSchema.index({ email: 1, contactNumber: 1 }, { unique: true });

module.exports = mongoose.model('Contact', contactSchema);
