const jwt = require("jsonwebtoken");

const History = require("../models/History.model");

function getUserHistory(req, res) {
  let decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );

  History.getHistory({
    userID: decoded._id
  })
    .then(History => {
      return res.status(200).send({ History: History });
    })
    .catch(err => console.log(err));
}

module.exports = { getUserHistory };
