const axios = require("axios");

const API = "a1940f6091cee8f1939beaa1ed9a82dc";

function getWeather(req, res) {
  console.log("req", req.body);
  const lat = req.body.lat;
  const lon = req.body.lon;
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}`;

  return axios.get(url).then(response => {
    res.status(200).send(response.data);
  });
}

module.exports = {
  getWeather
};

// async function getUser() {
//   try {
//     const response = await axios.post(url);
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }
// return res.status(200).send(response);
