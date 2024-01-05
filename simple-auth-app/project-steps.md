Project Setup:

1. Create a node js project by using

   1. npm init and manuall fill up each step
   2. npm init -y

   Note: package.json file will be created in the project that is heart of the project

2. create main file like index.js
3. Install project dependencies (to install package we can use npm install command)

   1. express js (npm install express) https://www.npmjs.com/package/express
   2. dotenv (npm install dotenv)

   - this package is used to use env variable in the project

   3. nodemon (npm install nodemon --save-dev)

   - this package is used to restart node application server automatically when we changed the files or anything in the file
   - this package we can install as a dev dependecies as this is only for development purpose
   - we can install package as dev dependencies using flag --save-dev along with npm install command
   - to run a project using nodemon use the command nodemon index.js

4. create .env file to store all secret information about the project

Create Express Server(backend server/node server):
To create an express sever we need to follow below steps

1.  import or include express package in the main file in our case it is index.js

- const express = require("express");
- const app = express();
- require("dotenv").config({
  path: "./.env",
  });
- const port = process.env.PORT;
- app.listen(port, function () {
  console.log("Application running on http://localhost:" + port);
  });

Project Architecture(MVC Design Pattern):

The folder structure for MVC design is

1. models
2. view (for backend we dont need to create)
3. controllers
4. database
5. utils
6. middlewares
7. routes

Database Setup:

1. We are using mysql database
2. open xampp and click on start apache and mysql
3. open phpmyadmin in browser
   http://localhost/phpmyadmin/index.php
4. create a database named as auth_app
5. create tables users that should contains fields like
   - id ==> int, primary key, auto increment
   - fullname = varchar(256)
   - username = varchar(256)
   - password = varchar(256)
   - created_at = datetime
   - updated_at = datetime
   - status = int
     then click on save to create table

MYSQL Database connection with Node Application:

1. Install mysql2 package from npm (https://www.npmjs.com/package/mysql2)
2. create index.js file inside database folder

   - const util = require("util");
   - const mysql = require("mysql2");
   - require("dotenv").config({
     path: "../.env",
     });
   - const connection = mysql.createPool({
     host: process.env.DB_HOST,
     port: process.env.DB_PORT,
     user: process.env.DB_USER,
     password: process.env.DB_PASSWORD,
     database: process.env.DB_NAME,
     });
   - console.log(
     `\n Database connected on host: `,
     connection.config.connectionConfig.host
     );
   - connection.query = util.promisify(connection.query).bind(connection);
   - module.exports = connection;

3. use this connection in main index.js file (see the index.js for reference)
