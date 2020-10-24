import "./static/css/signup.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Paper, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Advanced Stem Learning
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errStatus, setErrStatus] = useState(false);
  const classes = useStyles();

  let users = [];
  let errMessage = false;

  // async function to obtain emails for comparison
  const getEmails = () => {
    axios
      .get("http://localhost:5000/users/")
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          users.push(res.data[i].email);
        }
      })
      .catch((err) => console.log("Error: " + err));
  };

  // on load, run it fam
  useEffect(() => {
    getEmails();
  });

  // on sign up click
  const onSubmit = (e) => {
    e.preventDefault();

    getEmails();

    // check if user already exists
    for (let i = 0; i < users.length; i++) {
      if (email === users[i]) {
        console.log(users[i]);
        errMessage = true;
        break;
      }
    }

    console.log(errMessage);

    if (!errMessage) {
      // console.log("new user");
      setErrStatus((errStatus) => (errStatus = false));
      const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      axios
        .post("http://localhost:5000/users/add", user)
        .then((res) => console.log(res.data));
      window.location = "/login";
    } else {
      // console.log("user exists");
      setErrStatus((errStatus) => (errStatus = true));
    }
  };

  // regex will come in later 
  const validateForm = () => {
    return (
      email.length > 0 &&
      password.length > 0 &&
      firstName.length > 0 &&
      lastName.length > 0
    );
  };

  return (
    <Paper elevation={1}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form onSubmit={onSubmit} className={classes.form}>
            {errStatus && (
              <Snackbar open={true} autoHideDuration={2000}>
                <Alert variant="outlined" severity="error">
                  Email in Use!
                </Alert>
              </Snackbar>
            )}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={firstName}
                  autoFocus
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={!validateForm()}
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </Paper>
  );
};

export default SignUp;
