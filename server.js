const express = require("express");
const MongoClient = require("mongodb").MongoClient;
// const cookieParser	= require('cookie-parser');
const bodyParser = require("body-parser");
// const methodOverride	= require('method-override');
const app = express();

const port = 3001;

app.use((req, res, next) => {
	const responseSettings = {
		AccessControlAllowOrigin      : req.headers.origin,
		AccessControlAllowHeaders     : 'Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name',
		AccessControlAllowMethods     : 'POST, GET, PUT, DELETE, OPTIONS',
		AccessControlAllowCredentials : true
	};
	res.header('Access-Control-Allow-Credentials', responseSettings.AccessControlAllowCredentials);
	res.header('Access-Control-Allow-Origin', responseSettings.AccessControlAllowOrigin);
	res.header('Access-Control-Allow-Headers', (req.headers[ 'access-control-request-headers' ]) ? req.headers[ 'access-control-request-headers' ] : 'x-requested-with');
	res.header('Access-Control-Allow-Methods', (req.headers[ 'access-control-request-method' ]) ? req.headers[ 'access-control-request-method' ] : responseSettings.AccessControlAllowMethods);

	if (req.method === 'OPTIONS') {
		res.send(200);
	} else {
		next();
	}
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/weather.route")(app);

app.listen(port, () => {
  console.log("We are live on " + port);
});
// close routes
// var bodyParser = require("body-parser");
// var authMiddleware = require("./middlewares/auth.middleware.js");
// var config = require("./config/constant");
// // app.use(express.static('public'));

// var mongoose = require("mongoose");

// var db = mongoose.createConnection(config.db_main);
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function() {
//   console.log("Conncet");
// });

// require("./config/schemas/user");
// //require('./schemas/history.schema');
// // require('./models/user.model')(mongoose)

// // Add Routes
// module.exports = {
//   main: db
// };

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// // parse application/json
// app.use(bodyParser.json());

// app.use("/api", authMiddleware);

// Routes
// require("./routes/auth.route")(app);

// app.get('/', function (req, res) {
//   res.sendFile('index.html');
// });
// app.get('/test', function (req, res) {
//     res.send('Hello');
//   });
