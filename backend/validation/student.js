const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateStudentInput(data) {
    let errors = {};

    // convert empty fields to empty string 
    data.email= !isEmpty(data.email) ? data.email : "";
    data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
    data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
    data.grade = !isEmpty(data.grade) ? data.grade : 0;

    if(Validator.isEmpty(data.firstName)) {
        errors.firstName = "First Name is required";
    }
    if(data.firstName.length < 4) {
        errors.firstName = "First Name needs at least 4 chars."
    }
    if(Validator.isEmpty(data.lastName)) {
        errors.lastName = "Last Name is required";
    }
    if(data.lastName.length < 4) {
        errors.lastName = "Last Name needs at least 4 chars."
    }
    if(Validator.isEmpty(data.email)) {
        errors.email = "Email is required";
    }else if(!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid"
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}