//include express package
const express = require("express");
const app = express(); //create app constructor

//include and config dotenv to read environment variable
require("dotenv").config({
  path: "./.env",
});

const connection = require("./database/index.js");
const userRoutes = require("./routes/user.routes.js");

//get the port from .env file
const port = process.env.PORT;

//middlewares
app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use("/users", userRoutes);

app.get("/", function (request, response) {
  console.log("This is main route!!");
  response.send("This is main page 1!!");
});

app.get("/check-account", function (req, res) {
  //check for account number is given
  const accountNumber = req.query.accountNumber; //request body

  const accountBalances = [
    {
      id: 1,
      account_number: 1001,
      customer_name: "Sushree",
      balance: 10000000,
    },
    { id: 2, account_number: 1002, customer_name: "Gajanan", balance: 500 },
    { id: 3, account_number: 1003, customer_name: "Mummun", balance: 23400 },
  ];

  let data = [];

  for (const item of accountBalances) {
    if (item.account_number === parseInt(accountNumber)) {
      data.push(item);
      break;
    }
  }

  //resonse body
  return res.send(
    data && data.length > 0
      ? data
      : "No customer exists with this account number!!"
  );
});

//listen the server
if (connection.config.connectionConfig.host) {
  app.listen(port, function () {
    console.log("Application running on http://localhost:" + port);
  });
} else {
  console.log("Database connection failed!!");
}
