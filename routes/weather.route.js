module.exports = function(app) {
  app.post("/api/weather", function(req, res) {
    console.log("WEATHER CONTROLLER");
  });
  // app.get('/user/:id', UserController.getOneUser);
  // app.post('/user', UserController.addUser);
  // app.put('/user/:id', UserController.editUser);
  // app.delete('/user/:id', UserController.deleteUser);
};
