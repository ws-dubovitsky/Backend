const axios = require("axios");
const config = require("../config/constant");
const HistoryModel = require("../models/History.model");

function getWeather(req, res) {
  const lat = req.body.lat;
  const lon = req.body.lon;
  const url = `${config.url}${lat}&lon=${lon}&appid=${
    config.API
  }`;

  return axios.get(url).then(response => {
    
    const newHistory = {
      userID: req.user._id,
      weatherList: response.data.list,
      city: response.data.city.name
    };

    console.log("newHistory",newHistory)
    
    HistoryModel.createHistory(newHistory)
      .then(() => {
        res.status(200).send(response.data);
      })
      .catch((err) => {
        res.status(500).send(err);
      })

    // const newHistory = new HistoryModel.createHistory();
    // newHistory.userID = req.user._id;
    // newHistory.weatherList = response.data.list;
    // newHistory.city = response.data.city.name;
    // newHistory.save();
  });
}

module.exports = {
  getWeather
};
