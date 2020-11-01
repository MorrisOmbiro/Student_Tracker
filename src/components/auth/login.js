import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import MainNavbar from "../layout/modules/MainNavbar";
import Typography from "../layout/modules/Typography";
import AppForm from "../layout/modules/AppForm";
import AppFooter from "../layout/modules/AppFooter";
import FormButton from "../layout/modules/FormButton";
import { withStyles } from "@material-ui/core/styles";
import withRoot from '../layout/modules/withRoot';

const useStyles = (theme) => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
});

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };
  render() {
    const { errors } = this.state;
    const { classes } = this.props;
    return (
      <React.Fragment>
        <MainNavbar />
        <AppForm>
          <React.Fragment>
            <Typography
              variant="h0"
              gutterBottom
              marked="center"
              align="center"
            >
              <Link to="/" className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i> Back
                to home
              </Link>
              <h4>
                <b>Login</b> below
              </h4>
            </Typography>
            <Typography variant="body2" align="center">
              <p align="center" className="grey-text text-darken-1">
                Don't have an account?
                <Link to="/register" underline="always">
                  {" "}
                  Register
                </Link>
              </p>
            </Typography>
          </React.Fragment>
          <div className="container">
            <div style={{ marginTop: "1rem" }} className="row">
              <div className="col s8 offset-s0">
                <form
                  noValidate
                  onSubmit={this.onSubmit}
                  className={classes.form}
                >
                  <div className="input-field col s12">
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                      className={classnames("", {
                        invalid: errors.email || errors.emailnotfound,
                      })}
                    />
                    <label htmlFor="email">Email</label>
                    <span className="red-text">
                      {errors.email}
                      {errors.emailnotfound}
                    </span>
                  </div>
                  <div className="input-field col s12">
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      className={classnames("", {
                        invalid: errors.password || errors.passwordincorrect,
                      })}
                    />
                    <label htmlFor="password">Password</label>
                    <span className="red-text">
                      {errors.password}
                      {errors.passwordincorrect}
                    </span>
                  </div>
                  <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                    <FormButton
                      className={classes.button}
                      size="large"
                      color="secondary"
                      fullWidth
                    >
                      {"Login"}
                    </FormButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
     
        </AppForm>
        <AppFooter />
      </React.Fragment>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(
  withRoot(withStyles(useStyles)(Login))
);
