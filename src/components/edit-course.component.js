import axios from "axios";
import React, { Component } from "react";

export default class EditCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courseName: "",
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/courses/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          courseName: res.data.courseName,
        });
      })
      .catch((error) => console.log(error));

    // edit course here
  }

  onChangeCourseName = (e) => {
    this.setState({ courseName: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const course = {
      courseName: this.state.courseName,
    };

    console.log(course);

    axios.post("http://localhost:5000/courses/update/" + this.props.match.params.id, course)
      .then((res) => console.log(res.data));
    window.location = "/courses";
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Course Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.courseName}
              onChange={this.onChangeCourseName}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Edit Course Name"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
