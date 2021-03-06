import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import classnames from "classnames";
import PropTypes from "prop-types";
import FormButton from "../layout/modules/FormButton";
import { updateStudent } from "../../actions/authActions";

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

class EditStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      grade: Number(0),
      errors: {},
    };
  }

  componentDidMount() {
    axios
      .get("/api/students/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          email: response.data.email,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          grade: Number(response.data.grade),
        });
      })
      .catch((err) => console.log(err));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e, history) => {
    e.preventDefault();

    const updatedStudent = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      grade: Number(this.state.grade),
    };
    const id = window.location.pathname.split("/")[2]
    this.props.updateStudent(updatedStudent, this.props.history, id)
  };

  render() {
    const { classes } = this.props;
    const { errors, email, firstName, lastName } = this.state;

    return (
      <AppBar
        className={classes.searchBar}
        position="static"
        color="default"
        elevation={0}
      >
        <Paper className={classes.paper}>
          <React.Fragment>
            <Typography
              variant="h1"
              gutterBottom
              marked="center"
              align="center"
            >
              <Link to="/dashboard" className="btn-flat waves-effect">
                <i className="material-icons left" style={{ color: "red" }}>
                  backspace
                </i>{" "}
                <b>CANCEL</b>
              </Link>
            </Typography>
            <Typography
              align="center"
              variant="h3"
              gutterBottom
              marked="center"
            >
              <p align="center" className="grey-text text-darken-1">
                <b>Edit</b> Student
              </p>
            </Typography>
          </React.Fragment>
          <div className="container">
            <div style={{ marginTop: "1rem" }} className="row">
              <form
                noValidate
                onSubmit={this.onSubmit}
                className={classes.form}
              >
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={email}
                    id="email"
                    type="email"
                    errors={errors.email}
                    className={classnames("", { invalid: errors.email })}
                  />
                  <label htmlFor="email">Email</label>
                  <span className="red-text">{errors.email}</span>
                </div>
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={firstName}
                    id="firstName"
                    type="text"
                    errors={errors.firstName}
                    className={classnames("", { invalid: errors.firstName })}
                  />
                  <label htmlFor="firstName">First Name</label>
                  <span className="red-text">{errors.firstName}</span>
                </div>
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={lastName}
                    id="lastName"
                    type="text"
                    errors={errors.lastName}
                    className={classnames("", { invalid: errors.lastName })}
                  />
                  <label htmlFor="lastName">Last Name</label>
                  <span className="red-text">{errors.lastName}</span>
                </div>
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.grade}
                    id="grade"
                    type="Number"
                  />
                  <label htmlFor="grade">Grade Level</label>
                  <span className="red-text">{errors.grade}</span>
                </div>
                <div className="col s12" style={{ paddingLedt: "11.250px" }}>
                  <FormButton
                    className={classes.button}
                    size="large"
                    color="secondary"
                    fullWidth
                  >
                    {"Update"}
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
}

EditStudent.propTypes = {
  classes: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  updateStudent: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { errors: state.errors };
}

export default connect(mapStateToProps, {updateStudent})(
  withStyles(styles)(withRouter(EditStudent))
);
