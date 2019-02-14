const User = require("../config/schemas/user.schema");

const getUsers = function(param) {
  return new Promise((resolve, reject) => {
    User.find(param, (err, res) => {
      if (err) return reject(err);
      resolve(res);
    });
  });
};

const createUser = function(param) {
  return new Promise((resolve, reject) => {
    User.create(param, (err, newUser) => {
      console.log("NEW USER", newUser);
      if (err) return reject(err);
      resolve(newUser);
      // saved!
    });
  });
};

module.exports = {
  getUsers,
  createUser
};
