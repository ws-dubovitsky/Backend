const express = require("express");
const validationMiddleware = require("../middlewares/validation.middleware");
const authMiddleware = require("../middlewares/auth.middleware");
const User = require("../controllers/auth.controller");
const users = express.Router();
const cors = require("cors");
users.use(cors());

users.post("/register", validationMiddleware.register, User.register);
users.post("/login", User.login);
users.post("/profile", User.profile);
users.get("/checkLogin", authMiddleware, User.checkLogin);

module.exports = users;
