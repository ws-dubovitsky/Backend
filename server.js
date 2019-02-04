var express = require("express");

var app = express(); // close routes
var bodyParser = require("body-parser");
var authMiddleware = require("./middlewares/auth.middleware.js");
var config = require("./config/constant");
// app.use(express.static('public'));

var mongoose = require("mongoose");

var db = mongoose.createConnection(config.db_main);
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Conncet");
});

require("./config/schemas/user");
//require('./schemas/history.schema');
// require('./models/user.model')(mongoose)

// Add Routes
module.exports = {
  main: db
};

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use("/api", authMiddleware);

// Routes
require("./routes/auth.route")(app);
require("./routes/weather.route")(app);

// app.get('/', function (req, res) {
//   res.sendFile('index.html');
// });
// app.get('/test', function (req, res) {
//     res.send('Hello');
//   });

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
