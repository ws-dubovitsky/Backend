const express = require("express");
const users = express.Router();
const cors = require("cors");
users.use(cors());
const jwt = require("jsonwebtoken");

let History = require("../config/schemas/History");

function getUserHistory(req, res) {
  let decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );

  History.find({
    userID: decoded._id
  })
    .then(History => {
      console.log({ History: History });
      return res.status(200).send({ History: History });     
    })
    .catch(err => console.log(err));
}

module.exports = { getUserHistory };
