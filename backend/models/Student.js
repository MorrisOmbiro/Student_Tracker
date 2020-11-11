const { Description } = require("@material-ui/icons");
const mongoose = require("mongoose");
const ProgressDescription = require("./ProgressDescription");
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
    }
  },
  {
    timestamps: true,
  }
);

module.exports = Student = mongoose.model("students", StudentSchema);
