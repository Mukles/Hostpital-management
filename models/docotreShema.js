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
  joinData: {
    type: String,
    require: true,
    default: new Date().toDateString(),
  },
  joinTime: {
    type: String,
    require: true,
    default: new Date().toTimeString(),
  },
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  imgPath: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
    enum: ["Female", "Male"],
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
  cabinNumber: {
    type: Number,
    require: true,
  },
  loginPermision: {
    type: String,
    require: true,
    enum: ["hostpital", "any"],
  },
});

const Doctor = mongoose.model("Conversation", doctorSchema);

module.exports = Doctor;
