module.exports = function(req, res, next) {
  console.log("AUTH MIDDLEWARE");

  //req.headers

  // if (validToken(req.headers.token)) {
  //     next()

  // } else {
  //     res.status(401).send({message: 'Unauthorized'})
  // }
};

function validToken(token) {
  // if(...) return true
  // return false;
}
