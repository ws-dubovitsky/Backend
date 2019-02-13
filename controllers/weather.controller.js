const axios = require("axios");
const config = require("../config/constant");
const History = require("../config/schemas/history.schema");

function getWeather(req, res) {
  const lat = req.body.lat;
  const lon = req.body.lon;
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${
    config.API
  }`;

  return axios.get(url).then(response => {
    res.status(200).send(response.data);
    const newHistory = new History();
    newHistory.userID = req.user._id;
    newHistory.weatherList = response.data.list;
    newHistory.city = response.data.city.name;
    newHistory.save();
  });
}

module.exports = {
  getWeather
};
