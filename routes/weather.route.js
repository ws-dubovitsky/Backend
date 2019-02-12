let WeatherController = require("../controllers/weather.controller.js");
let HistoryController = require("../controllers/History");

// console.log(" WeatherController.getWeather", WeatherController);

module.exports = function(app) {
  app.post("/api/weather", WeatherController.getWeather);
  app.get("/api/weather", WeatherController.getWeather); 
  app.post("/api/history", HistoryController.getUserHistory);
};

// app.get('/user/:id', UserController.getOneUser);
// app.post('/user', UserController.addUser);
// app.put('/user/:id', UserController.editUser);
// app.delete('/user/:id', UserController.deleteUser);
