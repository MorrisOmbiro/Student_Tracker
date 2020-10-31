// create mongoose Schema
const mongoose = require("mongoose");

// create db Schema, map to mongoDb
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("users", userSchema);

module.exports = User;
