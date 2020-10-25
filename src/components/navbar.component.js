import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

export default class Navbar extends Component {
  render() {
    let i = 4;
    if (i === 3) {
      return (
        <nav className="navbar navbar-light bg-light navbar-expand-lg shadow-sm p-2 mb-2 bg-white rounded">
          <Link to="/" className="navbar-brand" style={styles.link}>
            ASL
          </Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/students" className="nav-link">
                  Students
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/courses" className="nav-link">
                  Courses
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Create Student
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/course" className="nav-link">
                  Create Course
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg shadow-sm p-1 mb-2 bg-white rounded">
          <Link to="/" className="navbar-brand" style={styles.link}>
            ASL
          </Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto"></ul>
            <span className="navbar-text py-0">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/signup" className="nav-link">
                    <Button className="nav_buttons" variant="outlined" size="small" color="primary">
                      Sign Up
                    </Button>
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/login" className="nav-link">
                  <Button className="nav_buttons" variant="contained" size="small" color="primary">
                    Login
                  </Button>
                  </Link>
                </li>
              </ul>
            </span>
          </div>
        </nav>
      );
    }
  }
}

const styles = {
  link: {
    color: "#138B86",
    fontweight: "bold",
    fontfamily: "sans-serif",
  },
};
