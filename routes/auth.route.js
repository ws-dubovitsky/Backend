const validationMiddleware = require("../middlewares/validation.middleware");
const authMiddleware = require("../middlewares/auth.middleware");
const UserController = require("../controllers/auth.controller");

module.exports = function(app) {
  app.post(
    "/users/register",
    validationMiddleware.register,
    UserController.register
  );
  app.post("/users/login", UserController.login);
  app.post("/users/profile", UserController.profile);
  app.get("/users/checkLogin", authMiddleware, UserController.checkLogin);
};
