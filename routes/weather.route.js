let WeatherController = require('../controllers/weather.controller.js')
axios = require('axios');

module.exports = function (app) {
    app.get("/api/weather", WeatherController.getWeather);     
};

  // app.get('/user/:id', UserController.getOneUser);
  // app.post('/user', UserController.addUser);
  // app.put('/user/:id', UserController.editUser);
  // app.delete('/user/:id', UserController.deleteUser);


// module.exports = function(app) {
//   app.post("/auth/register", AuthController.register);
//   app.post("/auth/login", AuthController.login);

//   // app.get('/api/isAuthorized', auth, AuthController.isAuthorized )
// };
