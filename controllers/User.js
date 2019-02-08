const axios = require("axios");
const config = require("../config/constant");

function getWeather(req, res) {
  console.log("req", req.body);
  

//   return axios.get(url).then(response => {
//     res.status(200).send(response.data);
//   });
}

module.exports = {
  getWeather
};