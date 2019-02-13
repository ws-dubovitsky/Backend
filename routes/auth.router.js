const express = require("express");
const User = require("../controllers/auth.controller");
const users = express.Router();
const cors = require("cors");
users.use(cors());

users.post("/register", User.register);
users.post("/login", User.login);
users.post("/profile", User.profile);

module.exports = users;
