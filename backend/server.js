
// express for node.js framework
const express = require("express");

// cors for external sources via HTTP requests
const cors = require("cors");

// mongoDB framework 
const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const passport = require("passport");
const users = require("./routes/api/users");

// load environment from .env file 
require("dotenv").config();

// express app. 
const app = express();
const port = process.env.PORT || 5000;

// use 
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

// defined in .env file 
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

// run that database fam! 
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// require files
const studentRouter = require("./routes/students");
const courseRouter = require("./routes/courses");
const userRouter = require("./routes/users")

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

// use the files
app.use("/students", studentRouter);
app.use("/courses", courseRouter);
app.use("/users", userRouter);

// start the server and listen on the PORT
app.listen(port, () => {
  console.log(`The surver is running here boyz: ${port}`);
});
