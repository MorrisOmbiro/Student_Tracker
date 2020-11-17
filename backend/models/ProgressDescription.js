const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProgressDescriptionSchema = new Schema({
    desc: {
        type: String, 
        required: true,
        minlength: 1,
    },created: {
        type: Date,
        default: Date.now
    } 
}, {
    timestamps: true,
})

module.exports = ProgressDescription = mongoose.model("progressDescriptions", ProgressDescriptionSchema)