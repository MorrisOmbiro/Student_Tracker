const router = require("express").Router();
let Student = require("../models/student.model");

router.route("/").get((req, res) => {
  Student.find()
    .then((students) => res.json(students))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const studentName = req.body.studentName;
  const newStudent = new Student({ studentName });

  newStudent
    .save()
    .then(() => res.json("Student added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    Student.findById(req.params.id)
        .then((student) => res.json(student))
        .catch((err) => res.status(400).json("Error: " + err))
})


router.route('/update/:id').post((req, res) => {
    Student.findById(req.params.id).then((student)=> {
        student.studentName = req.body.studentName

        student.save()
            .then(() => res.json("Student Updated"))
            .catch(() => res.status(400).json("Error: " + err))
    }).catch(err => res.status(400).json('Error: ' + err))
})
module.exports = router; 
