const express = require("express");
const router = express.Router();
const Users = require("../controllers/user.contoller.js");

//url: http://localhost:8000/users/register

router.get("/register", Users.registration);

module.exports = router;
