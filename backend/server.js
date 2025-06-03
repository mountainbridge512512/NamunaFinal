require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const { connectDB } = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const errorHandler = require('./middleware/errorHandler');
const dashboardRoutes = require('./routes/dashboardRoutes');

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Serve uploads folder statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API routes
app.use('/api/contact', contactRoutes);
app.use('/api/application', applicationRoutes);
app.use('/api/admin', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/dashboard', dashboardRoutes);



app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
