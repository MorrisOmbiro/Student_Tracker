import React, { Component } from "react";
import axios from 'axios'

export default class CreateCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courseName: "",
    };
  }

  onChangeStudentName = (e) => {
    this.setState({ courseName: e.target.value });
    

  };
  
  render() {
    return (
      <div>
        <h3>Create Course</h3>
        <form>
          <div className="form-group">
            <label>CourseName: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.studentName}
              onChange={this.onChangeStudentName}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Course"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}