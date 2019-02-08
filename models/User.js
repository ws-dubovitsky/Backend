var mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

// var userSchema = new Schema({
//   login: {
//     type: String,
//     default: ""
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   isDeleted: {
//     type: Boolean,
//     default: false
//   },
//   singUpDate: {
//     type: Date,
//     default: Date.now()
//   }
// });
var UserSchema = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

// userSchema.methods.generateHash = function(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// userSchema.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.password);
// };

module.exports = User = mongoose.model("users", UserSchema);

// (function() {
//   "use strict";
//   const server = require("../server.js");
//   const User = server.main.model("User");

//   module.exports = {
//     create,
//     update,
//     get
//   };

//   function create(userData) {
//     return new Promise(function(resolve, reject) {
//       User.create(userData, function(err, user) {
//         if (err) {
//           console.log(err);
//           reject(err);
//         } else {
//           resolve(user);
//         }
//       });
//     });
//   }

//   function get(params) {
//     return new Promise(function(resolve, reject) {
//       User.find(params)
//         .lean()
//         .exec(function(err, users) {
//           if (err) {
//             reject(err);
//           } else {
//             resolve(users);
//           }
//         });
//     });
//   }

//   function update(query, data) {
//     return new Promise(function(resolve, reject) {
//       User.findOneAndUpdate(query, data, { new: true }).exec(function(
//         err,
//         user
//       ) {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(user);
//         }
//       });
//     });
//   }
// })();
