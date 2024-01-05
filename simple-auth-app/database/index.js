const util = require("util");
const mysql = require("mysql2");
require("dotenv").config({
  path: "../.env",
});

// create the connection to database

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
console.log(
  `\n Database connected on host: `,
  connection.config.connectionConfig.host
);
connection.query = util.promisify(connection.query).bind(connection);
module.exports = connection;
