// (function() {
//   "use strict";
//   var server = require("../server.js");
//   var Weather = server.main.model("Weather");

//   module.exports = {
//     create,
//     update,
//     get
//   };

//   function create(weatherData) {
//     return new Promise(function(resolve, reject) {
//       Weather.create(weatherData, function(err, Weather) {
//         if (err) {
//           console.log(err);
//           reject(err);
//         } else {
//           resolve(Weather);
//         }
//       });
//     });
//   }

//   function get(params) {
//     return new Promise(function(resolve, reject) {
//       Weather.find(params)
//         .lean()
//         .exec(function(err, Weathers) {
//           if (err) {
//             reject(err);
//           } else {
//             resolve(Weathers);
//           }
//         });
//     });
//   }

//   function update(query, data) {
//     return new Promise(function(resolve, reject) {
//       Weather.findOneAndUpdate(query, data, { new: true }).exec(function(
//         err,
//         Weather
//       ) {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(Weather);
//         }
//       });
//     });
//   }
// })();
