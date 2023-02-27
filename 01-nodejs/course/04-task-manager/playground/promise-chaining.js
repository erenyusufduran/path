require("../src/db/mongoose");
const User = require("../src/models/user");
const Task = require("../src/models/task");

User.findByIdAndUpdate("63fc63d9e5ba873ca4d2f810", { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => console.log(result))
  .catch((e) => console.log(e));

Task.findByIdAndDelete("63fc62c8030e6b46e083c87a")
  .then(() => Task.countDocuments({ completed: false }))
  .then((result) => console.log(result))
  .catch((e) => console.log(e));
