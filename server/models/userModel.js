const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name!"],
      maxlength: [30, "Name cannot exceed 30 characters!"],
      minlength: [4, "Name should be greater than 4 characters!"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email!"],
      unique: true,
      trim: true,
      validate: [validator.isEmail, "Please enter a valid email id!"],
    },
    password: {
      type: String,
      required: [true, "Please enter your password!"],
      minlength: [8, "Password should have at least 8 characters!"],
    },
    role: {
      type: String,
      enum: ["Producer", "Consumer", "GovAdmin"],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
