const jwt = require("jsonwebtoken");
const UserModel = require("../models/User.model");
process.env.SECRET_KEY = "secret";

module.exports = function(req, res, next) {
  let decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );
  UserModel.getUsers({
    _id: decoded._id
  })
    .then(users => {
      const user = users[0]
      if (user) {
        req.user = user;
        next();
      } else {
        res.status(401).send({ error: "Unauthorized" });
      }
    })
    .catch(err => {
      res.status(500).send("error: " + err);
    });
};
