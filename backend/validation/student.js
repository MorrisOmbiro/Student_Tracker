const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateStudentInput(data) {
    let errors = {};

    data.email= !isEmpty(data.email) ? data.email : "";
    data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
    data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
    data.grade = !isEmpty(data.grade) ? data.grade : 0;

    if(Validator.isEmpty(data.firstName)) {
        errors.firstName = "First Name is required";
    }
    if(Validator.isEmpty(data.lastName)) {
        errors.lastName = "Last Name is required";
    }
    if(Validator.isEmpty(data.email)) {
        errors.email = "Email is required";
    }
    if(Validator.isEmpty(data.grade)) {
        errors.grade = "Grade is required";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}