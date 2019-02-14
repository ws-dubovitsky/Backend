const utils = require("../config/utils");

const register = (req, res, next) => {
  const { email, name, password } = req.body;

  if (email === "" || name === "" || password === "") {
    return res.status(400).send("You must fill all fields");
  }
  if (!utils.validEmail(email)) {
    return res.status(400).send("Email is invalid");
  }
  next();
};

module.exports = {
  register
};
