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

function postWeather(req, res) {
  console.log('req', req.body);
  // var axios = require("axios");
  // const url =
  //   "http://localhost:3000/";
  // return axios
  //   .get(url)
  //   .then(response => {
  //     console.log(response);
  //     return response;
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
}

module.exports = {
  postWeather
};
