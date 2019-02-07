const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var config = require("./config/constant");

var mongoose = require("mongoose");

const port = 3001;

var db = mongoose.createConnection(config.db_main);
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Conncet");
});

app.use((req, res, next) => {
  const responseSettings = {
    AccessControlAllowOrigin: req.headers.origin,
    AccessControlAllowHeaders:
      "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name",
    AccessControlAllowMethods: "POST, GET, PUT, DELETE, OPTIONS",
    AccessControlAllowCredentials: true
  };
  res.header(
    "Access-Control-Allow-Credentials",
    responseSettings.AccessControlAllowCredentials
  );
  res.header(
    "Access-Control-Allow-Origin",
    responseSettings.AccessControlAllowOrigin
  );
  res.header(
    "Access-Control-Allow-Headers",
    req.headers["access-control-request-headers"]
      ? req.headers["access-control-request-headers"]
      : "x-requested-with"
  );
  res.header(
    "Access-Control-Allow-Methods",
    req.headers["access-control-request-method"]
      ? req.headers["access-control-request-method"]
      : responseSettings.AccessControlAllowMethods
  );

  if (req.method === "OPTIONS") {
    res.send(200);
  } else {
    next();
  }
});

var db = mongoose.createConnection(config.db_main);
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Conncet");
});

require("./config/schemas/user");

module.exports = {
  main: db
};
// parse application/x-www-form-urlencoded
app.use(bodyParser.json());
// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
require("./routes/auth.route")(app);
require("./routes/weather.route")(app);

// app.get('/', function (req, res) {
//   res.sendFile('index.html');
// });
// app.get("/test", function(req, res) {
//   res.send("Hello");
// });

// Add Routes

// app.use("/api", authMiddleware);

app.listen(port, () => {
  console.log("We are live on " + port);
});
