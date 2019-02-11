const jwt = require("jsonwebtoken");
const User = require("../config/schemas/User");
process.env.SECRET_KEY = "secret";

module.exports = function(req, res, next) {
  console.log("AUTH MIDDLEWARE");
  console.log("AAAA", req.headers);
  // decode token
  // get userId from decoded token
  // find user by this UserId
  // put the user to req.user
  // -----------------------------------
  let decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );
  User.findOne({
    _id: decoded._id
  })
    .then(user => {
      console.log("USER", user);
      if (user) {
        req.user = user;
        console.log("req.user", req.user);
        next();
      } else {
        res.status(401).send({ error: "Unauthorized" });
      }
    })
    .catch(err => {
      res.status(500).send("error: " + err);
    });
  // -----------------------------------
};
