
// express for node.js framework
const express = require("express");

// cors for external sources via HTTP requests
const cors = require("cors");
const e = require("express");

// mongoDB framework 
const mongoose = require("mongoose");

// load environment from .env file 
require("dotenv").config();

// express app. 
const app = express();
const port = process.env.PORT || 5000;

// use 
app.use(cors());
app.use(express.json());

// defined in .env file 
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

// run that database fam! 
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database is ONN! success :)");
});

// require files
const studentRouter = require("./routes/students");
const courseRouter = require("./routes/courses");

// use the files
app.use("/students", studentRouter);
app.use("/courses", courseRouter);

// start the server and listen on the PORT
app.listen(port, () => {
  console.log(`The surver is running here boyz: ${port}`);
});
