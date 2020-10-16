const router = require("express").Router();
let Course = require("../models/course.model");

router.route("/").get((req, res) => {
  Course.find()
    .then((courses) => res.json(courses))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  let courseName = req.body.courseName;
  let newCourse = new Course({ courseName });

  newCourse
    .save()
    .then(() => res.json("Course added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
