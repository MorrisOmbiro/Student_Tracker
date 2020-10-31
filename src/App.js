import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux"
import store from "./store"

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/navbar.component";
import LandingPage from "./components/landing-page"
import StudentList from "./components/student-list.component";
import CourseList from "./components/course-list.component";
import EditStudent from "./components/edit-student.component";
import EditCourse from "./components/edit-course.component";
import CreateCourse from "./components/create-course.component";
import CreateStudent from "./components/create-student.component";
import Login from "./components/login";
import Signup from "./components/signup";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
        <br />
        <Provider store={store}>
        <Switch>
            <Route path="/students" exact component={StudentList} />
            <Route path="/" exact component={LandingPage} />
            <Route path="/courses" exact component={CourseList} />
            <Route key="edit-student" exact path="/edit/:id" component={EditStudent} />
            <Route key="edit-course" exact path="/edit/:id/course" component={EditCourse} />
            <Route path="/create" component={CreateStudent} />
            <Route path="/course" component={CreateCourse} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute  exact path="/dashboard" component={Dashboard} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </Provider>
        </div>
      </div>
    </Router>
  );
}
