//external imports
const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    require: true,
    trim: true,
  },
  phone: {
    type: Number,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
    trim: true,
    lowercase: true,
  },
  appointData: {
    type: String,
    require: true,
    default: new Date().toDateString(),
  },
  appointTime: {
    type: String,
    require: true,
    default: new Date().toTimeString(),
  },
  region: {
    type: String,
    required: true,
    trim: true,
  },
  note: {
    type: String,
    require: true,
    trim: true,
  },
  iHealth: {
    type: String,
    require: true,
    enum: ["yes", "no"],
  },
  paymentType: {
    type: String,
    require: true,
    enum: ["Credit Card", "Debit Card", "Case Money"],
  },
});

const Doctor = mongoose.model("Conversation", doctorSchema);

module.exports = Doctor;
