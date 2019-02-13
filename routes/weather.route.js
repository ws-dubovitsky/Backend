let WeatherController = require("../controllers/weather.controller");
let HistoryController = require("../controllers/history.controller");

module.exports = function(app) {
  app.post("/api/weather", WeatherController.getWeather);
  app.get("/api/weather", WeatherController.getWeather);
  app.post("/api/history", HistoryController.getUserHistory);
};
