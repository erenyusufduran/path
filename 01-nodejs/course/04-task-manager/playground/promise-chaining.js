require("../src/db/mongoose");
const User = require("../src/models/user");
const Task = require("../src/models/task");

// User.findByIdAndUpdate("63fc63d9e5ba873ca4d2f810", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => console.log(result))
//   .catch((e) => console.log(e));

// Task.findByIdAndDelete("63fc62c8030e6b46e083c87a")
//   .then(() => Task.countDocuments({ completed: false }))
//   .then((result) => console.log(result))
//   .catch((e) => console.log(e));

const updateAgeAndCount = async (id, age) => {
  await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("63fc63d9e5ba873ca4d2f810", 20)
  .then((count) => console.log(count))
  .catch((err) => console.log(err));

const deleteTask = async (id) => {
  await Task.findByIdAndDelete(id);
  return await User.countDocuments({ completed: false });
};

deleteTask("63fc65b90a0a5b3968b01633")
  .then((task) => console.log(task))
  .catch((err) => console.log(err));
