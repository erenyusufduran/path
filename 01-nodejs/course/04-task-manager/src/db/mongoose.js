const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

// const User = mongoose.model("User", {
//   name: { type: String },
//   age: { type: Number },
// });

// const me = new User({ name: "Eren", age: 21 });

// me.save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const Task = mongoose.model("Task", {
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const newTask = new Task({
  description: "Learn the Mongoose Library",
  completed: false,
});

newTask
  .save()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {});
