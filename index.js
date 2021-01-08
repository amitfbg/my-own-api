/**
 * @description: This is the starting of our application
 *
 */

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//Databse Connectiong
const url = require("./db-config/db_config");
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log(url);
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

//Importing Routes
const personsRoute = require("./routes/persons");

//applying middleware to make code a bit cleaner
app.use("/persons", personsRoute);

// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
