const router = require("express").Router();
let Student = require("../../models/Student");

//Load input validation
const validateStudentInput = require("../../validation/student");

// get all
router.route("/").get((req, res) => {
  Student.find()
    .then((students) => res.json(students))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/createStudent").post((req, res) => {
  const { errors, isValid } = validateStudentInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Student.findOne({ email: req.body.email }).then((student) => {
    if (student) {
      return res
        .status(400)
        .json({ email: "Student already exists based on email" });
    } else {
      const newStudent = new Student({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        grade: Number(req.body.grade),
      });

      newStudent
        .save()
        .then((student) => res.json("Student Added"))
        .catch((err) => res.status(400).json("Error: " + err));
    }
  });
});

router.route("/:id").get((req, res) => {
  Student.findById(req.params.id)
    .then((student) => res.json(student))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Student.findByIdAndDelete(req.params.id)
    .then(() => res.json("Student deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Student.findById(req.params.id)
    .then((student) => {
      student.email = req.body.email;
      student.firstName = req.body.firstName;
      student.lastName = req.body.lastName;
      student.grade = Number(req.body.grade);

      student
        .save()
        .then(() => res.json("Student Updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
