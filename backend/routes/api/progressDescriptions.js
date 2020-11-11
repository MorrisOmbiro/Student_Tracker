const router = require("express").Router();
let Desc = require('../../models/ProgressDescription')

router.route("/:id").get((req, res) => {
    Desc.find().then((desc)=> res.json(resc)).catch(err => res.status(400).json("Error: " + err))
})