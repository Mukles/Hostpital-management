//external imports
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const createError = require("http-errors");

//file upload directory
const uploadFolder = "./public/uploads/";

const IsFolderExists = async (path, cb) => {
  fs.exists(path, (exists) => {
    exists
      ? cb(null, path)
      : fs.promises
          .mkdir(path)
          .then(() => cb(null, path))
          .catch((err) => cb(err));
  });
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    IsFolderExists(uploadFolder, cb);
  },
  filename: function (req, file, cb) {
    const fileExetension = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExetension, "")
        .toLocaleLowerCase()
        .split(" ")
        .join("_") +
      "_" +
      Date.now();
    console.log(fileName);
    cb(null, fileName + fileExetension);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png"
    ) {
      cb(null, true);
    } else {
      cb(createError(error_msg));
    }
  },
});

module.exports = upload;
