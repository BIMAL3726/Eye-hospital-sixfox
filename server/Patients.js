const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  mrNumber: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  prefix: String,
  fatherOrSpouse: String,
  sex: String,
  dob: { type: String, required: true },
  age: String,
  maritalStatus: String,
  bloodGroup: String,
  address1: String,
  address2: String,
  location: String,
  city: String,
  pinCode: String,
  state: String,
  country: String,
  mobile: { type: String, required: true },
  email: String,
  kinMobile: String,
  kinRelation: String,
  abhaId: String,
  aadhar: String,
  occupation: String,
  religion: String,
  source: String,
  pan: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Patient", patientSchema);
