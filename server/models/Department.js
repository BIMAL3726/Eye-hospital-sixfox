const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Department = mongoose.model('DepartmentMaster', departmentSchema);
module.exports = Department;
