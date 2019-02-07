const axios = require("axios");
const config = require("../config/constant");

function getWeather(req, res) {
  console.log("req", req.body);
  const lat = req.body.lat;
  const lon = req.body.lon;
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${
    config.API
  }`;

  return axios.get(url).then(response => {
    res.status(200).send(response.data);
  });
}

module.exports = {
  getWeather
};
