const { SHA256 } = require("crypto-js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const password = "123abc!";

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

const hashedPassword =
  "$2a$10$I1WdUQa.0GYSuQekeVUoru.nk7Fwqy8Jto0BQ.u9ISdi3bMVeOB8C";
bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

// const data = {
//   id: 10
// };

// const token = jwt.sign(data, "123abc");
// console.log(token);

// const decoded = jwt.verify(token, "123abc");
// console.log("decoded: ", decoded);

// const message = "I am user number 3";
// const hash = SHA256(message).toString();

// console.log(`message: ${message}`);
// console.log(`hash: ${hash}`);

// const data = {
//   id: 4
// };
// const token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + "somesecret").toString()
// };

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// const resultHash = SHA256(JSON.stringify(token.data) + "somesecret").toString();
// if (resultHash === token.hash) {
//   console.log("data was not changed");
// } else {
//   console.log("data was changed, dont trust");
// }
