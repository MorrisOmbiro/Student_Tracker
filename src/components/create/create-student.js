import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import FormButton from "../layout/modules/FormButton";

const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: "auto",
    overflow: "hidden",
  },
  searchBar: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: "block",
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  CreateStudentWrapper: {
    margin: "40px 16px",
  },
});

function CreateStudent(props) {
  const { classes } = props;
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    setEmail(email);
  };

  return (
    <AppBar
        className={classes.searchBar}
        position="static"
        color="default"
        elevation={0}
      >
    <Paper className={classes.paper}>
      
        <React.Fragment>
          <Typography variant="h0" gutterBottom marked="center" align="center">
            <Link to="/dashboard" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              Home
            </Link>
          </Typography>
          <Typography align="center" variant="h3" gutterBottom marked="center">
            <p align="center" className="grey-text text-darken-1">
              <b>Create</b> Student
            </p>
          </Typography>
        </React.Fragment>
        <div className="container">
          <div style={{ marginTop: "1rem" }} className="row">
            <form noValidate onSubmit={onSubmit} className={classes.form}>
              <div className="input-field col s12">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  id="firstName"
                  type="text"
                />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  id="lastName"
                  type="text"
                />
                <label htmlFor="lastName">Last Name</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={(e) => setGrade(Number(e.target.value))}
                  value={grade}
                  id="grade"
                  type="Number"
                />
                <label htmlFor="grade">Grade Level</label>
              </div>
              <div className="col s12" style={{ paddingLedt: "11.250px" }}>
                <FormButton
                  className={classes.button}
                  size="large"
                  color="secondary"
                  fullWidth
                >
                  {"Create New Student"}
                </FormButton>
              </div>
            </form>
          </div>
        </div>
      
      <div className={classes.CreateStudentWrapper}>
        <Typography color="textSecondary" align="center">
          Advanced Stem Learning
        </Typography>
      </div>
    </Paper>
    </AppBar>
  );
}

CreateStudent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateStudent);
