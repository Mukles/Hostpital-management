// external imports
require("dotenv").config();

const port = process.env.PORT;
const connectionString = process.env.connectionString;

module.exports = {
  port,
  connectionString,
};
