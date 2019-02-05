// let weatherModel = require("../models/weather.model");

// function getWeather(req, res) {
//
//   const newWeather = {
//     weather: axios.get(url)
//   };

//   return weatherModel
//     .create(newWeather)
//     .then(result => {
//       console.log(result);
//       return result;
//     })
//     .then(result => {
//       res.status(200).send({ message: `Hello ${req.body.username}` });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

function getWeather() {
  var axios = require("axios");
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=London,us&appid=a1940f6091cee8f1939beaa1ed9a82dc";
  return axios
    .get(url)
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = {
  getWeather: getWeather
};
