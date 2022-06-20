//external importes
const createError = require("http-errors");
const multer = require("multer");
const path = require("path");
const { maxFileSize } = require("../../config");

// define the storage
const storage = multer.storage({
  destination: function (req, file, cb) {
    cb(null, "/public/uploads");
  },
  filename: function (req, file, cb) {
    const fileExt = path.extname(file.originalname);
    const filename =
      file.originalname
        .replace(fileExt, "")
        .toLowerCase()
        .split(" ")
        .join("-") +
      "-" +
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9);

    cb(null, fileName + fileExt);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: maxFileSize,
  },
  fileFilter: (req, res, err) => {
    if (err) {
      cb(createError(`Maximum ${maxFileSize} files are allowed to upload!`));
    } else {
      if (
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/png"
      ) {
        cb(null, true);
      } else {
        cb(createError(error_msg));
      }
    }
  },
});

module.exports = upload;
