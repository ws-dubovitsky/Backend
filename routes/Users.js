const express = require("express");
const User = require("../controllers/User");
const users = express.Router();
const cors = require("cors");
users.use(cors());

users.post("/register", User.register);
users.post("/login", User.login);
users.post("/profile", User.profile);

module.exports = users;

// module.exports = function(app) {
//   // app.get('/user', UserController.getAllUser);
//   // app.get('/user/:id', UserController.getOneUser);
//   // app.post('/user', UserController.addUser);
//   // app.put('/user/:id', UserController.editUser);
//   // app.delete('/user/:id', UserController.deleteUser);
// };
