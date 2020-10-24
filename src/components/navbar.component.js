import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {

    let i = 4; 
    if(i === 3) {
    return (
      <nav className="navbar navbar-light bg-light navbar-expand-lg">
        <Link to="/" className="navbar-brand" style={styles.link}>
          AdvancedStemLearning
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
          <span className="navbar-text">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/signup" className="nav-link">
                  Sign Up
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </span>
        </div>
      </nav>
    )} else {
      return (
      <nav className="navbar navbar-light bg-light navbar-expand-lg">
        <Link to="/" className="navbar-brand" style={styles.link}>
          AdvancedStemLearning
        </Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto"></ul>
          <span className="navbar-text">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/signup" className="nav-link">
                  Sign Up
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </span>
        </div>
      </nav>
      )
    }
  }
}

const styles = {
  link: {
    color: '#138B86',
    fontweight: 'bold',
    fontfamily: 'sans-serif'
  }
}
