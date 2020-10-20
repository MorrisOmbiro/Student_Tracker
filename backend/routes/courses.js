const router = require("express").Router();
let Course = require("../models/course.model");

// This is where the info will be got! ~ not "/courses" 
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


router.route("/:id").get((req, res) => {
  Course.findById(req.params.id)
    .then((course) => res.json(course))
    .catch((err) => res.status(400).json("Error: " + err))
})

router.route("/:id").delete((req, res) => {
  Course.findByIdAndDelete(req.params.id)
    .then((res) => res.json("Course Deleted"))
    .catch((err) => res.status(400).json("Error: " + err))
})

router.route("/update/:id").post((req, res) => {
  Course.findById(req.params.id).then((course) => {
    course.courseName = req.body.courseName

    course.save()
      .then(() => res.json("Course Updated"))
      .catch((err) => res.status(400).json("Error: " + err))
  }).catch(err => res.status(400).json("Error: " + err))
})


module.exports = router;
