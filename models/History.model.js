const History = require("../config/schemas/history.schema");

const getHistory = function(param) {
  return new Promise((resolve, reject) => {
    History.find(param, (err, res) => {
      if (err) return reject(err);
      resolve(res);
    });
  });
};

const createHistory = function(param) {
  return new Promise((resolve, reject) => {
    History.create(param, (err, newHistory) => {
      if (err) return reject(err);
      resolve(newHistory);
    });
  });
};

module.exports = {
  getHistory,
  createHistory
};
