//external imports
const mongoose = require("mongoose");

const peopleSchema = mongoose.Schema({
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
  joinData: {
    type: String,
    require: true,
    default: new Date().toTimeString(),
  },
});
