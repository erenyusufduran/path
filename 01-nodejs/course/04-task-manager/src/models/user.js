const { model } = require("mongoose");
const validator = require("validator");

const User = model("User", {
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

module.exports = User;
