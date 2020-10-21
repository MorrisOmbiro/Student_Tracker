import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import LandingPage from "./components/landing-page"
import StudentList from "./components/student-list.component";
import CourseList from "./components/course-list.component";
import EditStudent from "./components/edit-student.component";
import EditCourse from "./components/edit-course.component";
import CreateCourse from "./components/create-course.component";
import CreateStudent from "./components/create-student.component";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
        <br />
        <Route path="/students" exact component={StudentList} />
        <Route path="/" exact component={LandingPage} />
        <Route path="/courses" exact component={CourseList} />
        <Route key="edit-student" exact path="/edit/:id" component={EditStudent} />
        <Route key="edit-course" exact path="/edit/:id/course" component={EditCourse} />
        <Route path="/create" component={CreateStudent} />
        <Route path="/course" component={CreateCourse} />
        </div>
      </div>
    </Router>
  );
}
