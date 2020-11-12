const router = require("express").Router();
let Student = require("../../models/Student");

// get all
router.route("/").get((req, res) => {
  Student.find()
    .then((students) => res.json(students))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/createStudent").post((req, res) => {
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const grade = Number(req.body.grade);

  const newStudent = new Student({
    email,
    firstName,
    lastName,
    grade
  });

  newStudent
    .save()
    .then((student) => res.json("Student Added"))
    .catch((err) => res.status(400).json("Error: " + err));
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