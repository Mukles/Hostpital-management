// external imports
const express = require("express");
const mongoose = require("mongoose");

//internal imports
const upload = require("../middlewares/fileUpload");
const { addDoctor } = require("../controller/doctorController");

//create router
const router = express.Router();

// all doctore list
router.get("/", (req, res) => {
  res.status(200).send("hey");
});

// addd a doctore
router.post("/add", upload.single("file"), addDoctor);

module.exports = router;
