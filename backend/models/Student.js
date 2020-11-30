const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true, 
      trim: true, 
      minLength: 3
    },firstName: {
        type: String,
        required: true,
    }, lastName: {
        type:String,
        required: true,
    },
    grade: {
      type: Number,
      required: true,
    }, user_id: {
      type: String,
      minLength: 4,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = Student = mongoose.model("students", StudentSchema);
