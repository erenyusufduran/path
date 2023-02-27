const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://localhost:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    lowercase: true,
    validate(val) {
      if (!validator.isEmail(val)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    trim: true,
    minlength: 7,
    required: true,
    validate(val) {
      if (val.toLowerCase().includes("password")) {
        throw new Error("Password cannot container 'password'");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("Age must be a positive number");
    },
  },
});

const me = new User({ name: "Eren", age: 21, email: "erenyusufduran@gmail.com", password: "errsdfasl45" });

me.save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

const Task = mongoose.model("Task", {
  description: { type: String, required: true, trim: true },
  completed: { type: Boolean, default: false },
});

const newTask = new Task({
  description: " Learn the Mongoose Library",
});

newTask
  .save()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {});
