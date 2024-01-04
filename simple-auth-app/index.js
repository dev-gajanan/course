//include express package
const express = require("express");
const app = express(); //create app constructor

//include and config dotenv to read environment variable
require("dotenv").config({
  path: "./.env",
});

//get the port from .env file
const port = process.env.PORT;

//listen the server
app.listen(port, function () {
  console.log("Application running on http://localhost:" + port);
});
