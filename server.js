const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const authMiddleware = require("./middlewares/auth.middleware");
const config = require("./config/constant");
const Users = require("./routes/Users");
const port = 3001;
const mongoURI = config.db_main;

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

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/api", authMiddleware);

// // Routes
require("./routes/weather.route")(app);
app.use("/users", Users);

app.listen(port, () => {
  console.log("We are live on " + port);
});

// // app.get('/', function (req, res) {
// //   res.sendFile('index.html');
// // });
// // app.get("/test", function(req, res) {
// //   res.send("Hello");
// // });

// // Add Routes
