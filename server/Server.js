const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db/db');
const patientRoutes = require('./routes/patientRoutes');
const masterRoutes = require('./routes/masterRoutes');
const doctorRoutes = require('./routes/doctorRoutes'); 
const departmentRoutes = require('./routes/departmentRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const serviceRateRoutes = require('./routes/serviceRateRoutes');



dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Use only one route prefix for master
app.use('/api/master', masterRoutes);

// Patient-related routes
app.use('/api', patientRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/service-rates', serviceRateRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
