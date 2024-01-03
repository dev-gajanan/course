//import or include express js
const express = require("express");

//import or include dotenv
require("dotenv").config({
  path: "./.env",
});

//create the object for express
const app = express();

//port for the application
const port = process.env.PORT;

app.listen(port, function () {
  console.log("Application running on http://localhost:" + port);
});
