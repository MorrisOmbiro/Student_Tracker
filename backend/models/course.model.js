// create mongoose Schema
const mongoose = require('mongoose')

// create db Schema, map to mongoDB 
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    courseName: {type: String, required: true}
},{
    timestamps: true
})

const Course = mongoose.model("Course", courseSchema);

module.exports = Course 