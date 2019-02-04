let AuthController = require("../controllers/auth.controller.js");

module.exports = function(app) {
  app.post("/auth/register", AuthController.register);
  app.post("/auth/login", AuthController.login);

  // app.get('/api/isAuthorized', auth, AuthController.isAuthorized )
};
