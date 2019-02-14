const jwt = require("jsonwebtoken");
const User = require("../config/schemas/user.schema");
process.env.SECRET_KEY = "secret";

module.exports = function(req, res, next) {
  let decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );
  User.findOne({
    _id: decoded._id
  })
    .then(user => {
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
