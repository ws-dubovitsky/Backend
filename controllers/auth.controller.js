// let User = require("../models/user.model");
// var bodyParser = require("body-parser");

// // function checkLogin (req, res) {
// //     console.log('checkLogin', req.query)
// //     res.status(401).send({message: 'done'})
// // }

// // function login (req, res) {
// //     console.log('login', req.body)
// //     res.status(200).send({message: 'login done'})

// //     // bcrypt

// //     //generate token jsonwebtoken
// //     //jwt.sign
// //     // res.status(200).send({message: 'ok', token: token})
// // }

// function register(req, res, next) {
//   // check if the user exist
//   const { body } = req;
//   let { login } = body;
//   let { email } = body;
//   const { password } = body;
  
//   email = email.toLowerCase();
//   email = email.trim();
//   // console.log({ login });
//   // console.log({ email });
//   // console.log({ password });
 

//   // console.log({ isDeleted });
//   // console.log({ singUpDate });

//   ///////////////////////////////////////////
//   // Проверяем, корректны ли email и password

//   if (!login) {
//     return res.send({
//       success: false,
//       message: "Error: Email cannot be blank."
//     });
//   }

//   if (!email) {
//     return res.send({
//       success: false,
//       message: "Error: Email cannot be blank."
//     });
//   }

//   if (!password) {
//     return res.send({
//       success: false,
//       message: "Error: Password cannot be blank."
//     });
//   }

//   /////////////////////////////////////////////////
//   // Смотрим, есть ли пользователь с таким же email

//   User.find(
//     {
//       email: email
//     },
//     (err, previosUser) => {
//       if (err) {
//         return res.send({
//           success: false,
//           message: "Error: server error"
//         });
//       } else if (previosUser.length > 0) {
//         return res.send({
//           success: false,
//           message: "Error: Account already exist."
//         });
//       }
//     }
//   );

//   ///////////////////////////////////////////
//   // Если нет, то создаем нового пользователя

//   const newUser = new User();
//   newUser.login = login;
//   newUser.email = email;
//   newUser.password = newUser.generateHash(password);
//   console.log(newUser);

//   newUser.save((err, user) => {
//     if (err) {
//       return res.send({
//         success: false,
//         message: "Error: Server error"
//       });
//     }
//     return res.send({
//       success: true,
//       message: "Sign up"
//     });
//   });
// }

// module.exports = {
//   // checkLogin,
//   // login,
//   register
// };

// // return new Promise((resolve, reject) => {
// //     return AuthController.register()
// //         .then(result => {
// //             resolve({result})
// //         })
// //         .catch(err => {
// //             reject(err)
// //         })
// // })
