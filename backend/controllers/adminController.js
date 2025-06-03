const Admin = require('../models/admin');
const bcrypt = require('bcryptjs');

exports.getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id).select('username email');
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    res.json(admin);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
exports.updatePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  try {
    const admin = await Admin.findById(req.adminId);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    const isMatch = await bcrypt.compare(oldPassword, admin.password);
    if (!isMatch) return res.status(401).json({ message: 'Old password incorrect' });

    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(newPassword, salt);
    await admin.save();

    res.status(200).json({ message: 'Password updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
exports.getAllAdmins = async (req, res) => {
  try {
    // find all admins, but only return username and email
    const admins = await Admin.find({}, 'username email').lean();
    res.status(200).json(admins);
  } catch (err) {
    console.error('Error fetching admins:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
exports.deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Admin.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    res.status(200).json({ message: 'Admin deleted' });
  } catch (err) {
    console.error('Error deleting admin:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
