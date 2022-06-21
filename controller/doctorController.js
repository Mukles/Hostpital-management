// external imports
const createError = require("http-errors");

//internal imports
const Doctor = require("../models/docotreShema");

// add conversation
async function addDoctor(req, res, next) {
  try {
    const newDoctor = new Doctor({
      ...req.body,
      imgPath: req.file.filename,
    });
    const result = await newDoctor.save();
    res.status(200).json({ message: "Conversation was added successfully!" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
}

module.exports = { addDoctor };
