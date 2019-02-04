let UserModel = require("../models/user.model");
function checkLogin(req, res) {
  console.log("checkLogin", req.query);
  res.status(401).send({ message: "done" });
}

function login(req, res) {
  console.log("login", req.body);
  res.status(200).send({ message: "login done" });

  // bcrypt

  //generate token jsonwebtoken
  //jwt.sign
  // res.status(200).send({message: 'ok', token: token})
}

function register(req, res) {
  // req.body.username, req.body.password

  // check if the user exist
  const newUser = {
    username: req.body.username,
    password: req.body.password
  };

  return UserModel.create(newUser)
    .then(result => {
      console.log(result);
      return result;
    })

    .then(result => {
      res.status(200).send({ message: `Hello ${req.body.username}` });
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = {
  checkLogin,
  login,
  register
};

// return new Promise((resolve, reject) => {
//     return AuthController.register()
//         .then(result => {
//             resolve({result})
//         })
//         .catch(err => {
//             reject(err)
//         })
// })
