const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({ firstName, lastName, email, password });

  newUser
    .save()
    .then(() => res.json("User Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

// add update here
router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id).then((user) => {
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;

    user
      .save()
      .then(() => res.json("User Updated"))
      .catch((err) => res.status(400).json("Error: " + err));
  }).catch(err => res.status(400).json("Error: " + err)) // user not found 
});

// add delete here
router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted"))
    .catch((err) => res.status(4000).json("Error: " + err));
});

module.exports = router;
