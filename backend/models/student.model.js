// create mongoose Schema
const mongoose = require('mongoose')

// create db Schema, map to mongoDB 
const Schema = mongoose.Schema

const studentSchema = new Schema({
    studentName: {type: String, required: true}
},{
    timestamps: true
})

const Student = mongoose.model("Student", studentSchema)

module.exports = Student 