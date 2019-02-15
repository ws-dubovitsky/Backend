const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserModel = require("../models/User.model");
process.env.SECRET_KEY = "secret";

//REGISTER

function register(req, res) {
  const today = new Date();
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today
  };

  return UserModel.getUsers({
    email: req.body.email
  })
    .then(users => {
      const user = users[0];
      console.log("reg", user);
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          UserModel.createUser(userData)
            .then(user => {
              res.status(200).send({ status: user.email + " registered" });
            })
            .catch(err => {
              res.status(401).send("error: " + err);
            });
        });
      } else {
        res.json({ error: "User already exists" });
      }
    })
    .catch(err => {
      res.status(401).send("error: " + err);
    });
}

//LOGIN

function login(req, res) {
  console.log("req.body", req.body.password);
  UserModel.getUsers({
    email: req.body.email
  })
    .then(users => {
      const user = users[0];
      console.log("USER", user);
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            _id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
          };
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          });

          res.status(200).send(token);
        } else {
          res.status(401).send({ error: "User does not exist" });
        }
      }
    })
    .catch(err => {
      res.send("error" + err);
    });
}

//PROFILE

function profile(req, res) {
  let decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );
  User.findOne({
    _id: decoded._id
  })
    .then(user => {
      if (user) {
        res.json(user);
        req.user = user;
      } else {
        res.send("User does not exist");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
}

function checkLogin(req, res) {
  res.status(200).send("Ok");
}

module.exports = {
  register,
  login,
  profile,
  checkLogin
};
