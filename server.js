// external imports
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

//internal imports
const { port, connectionString } = require("./config");
const doctorRoute = require("./router/doctorRoute");
const patientRouter = require("./router/patientRouter");
const {
  errorHandler,
  notFoundHandler,
} = require("./middlewares/common/errorHandle");
const exp = require("constants");

const app = express();

// database connection
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection successful!"))
  .catch((err) => console.log(err));

// request parsers
app.use(cors());
app.use(express.json());

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// routing setup
app.use("/doctor", doctorRoute);
app.use("/patient", patientRouter);

// 404 not found handler
app.use(notFoundHandler);

//default error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Your application is runing on ${port}`));
