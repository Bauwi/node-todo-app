const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");
// const id = "5a4c9c9953b2dd5d4b5541ff";

// if (!ObjectID.isValid(id)) {
//   console.log("ID not valid");
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log("Todos", todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log("Todo", todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log("Id not found");
//     }
//     console.log("Todo By Id", todo);
//   })
//   .catch(e => console.log(e));

User.findById("5a4b8b55825b0559e59a055c")
  .then(user => {
    if (!user) {
      return console.log("Id not found");
    }
    console.log("User: ", user);
  })
  .catch(e => console.log(e));
