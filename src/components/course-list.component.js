import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Course = (props) => (
  <tr>
    <td>{props.course.courseName}</td>
    <td>
      <Link to={"/edit/" + props.course._id + "/course"}>edit</Link> |{" "}
      {console.log(props.course._id)}
      <Button href="#" variant="outline-danger" onClick={() => { props.deleteCourse(props.course._id);}}>delete</Button>
    </td>
  </tr>
);

export default class CourseList extends Component {
  constructor(props) {
    super(props);

    this.state = { courses: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/courses/")
      .then((res) => this.setState({ courses: res.data }))
      .catch((error) => console.log(error));
  }

  deleteCourse = (id) => {
    axios.delete("http://localhost:5000/courses/" + id)
      .then((res) => console.log(res.data))

    this.setState({
      courses: this.state.courses.filter(el => el._id !== id)
    })
  }

  courseList = () => {
    return this.state.courses.map((currentCourse) => {
      return <Course course={currentCourse} deleteCourse={this.deleteCourse} key={currentCourse._id} />;
    });
  };

  render() {
    return (
      <div>
        <h3>courses</h3>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>course</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.courseList()}</tbody>
        </table>
      </div>
    );
  }
}
