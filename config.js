// external imports
require("dotenv").config();

const port = process.env.PORT;
const connectionString = process.env.connectionString;
const maxFileSize = process.env.maxFileSize;

module.exports = {
  port,
  connectionString,
  maxFileSize,
};
