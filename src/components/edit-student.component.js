import axios from "axios";
import React, { Component } from "react";

export default class EditStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentName: "",
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/students/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          studentName: res.data.studentName,
        });
      })
      .catch((error) => console.log(error));

    // edit course here
  }

  onChangeStudentName = (e) => {
    this.setState({ studentName: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const student = {
      studentName: this.state.studentName,
    };

    console.log(student);

    axios
      .post(
        "http://localhost:5000/students/update/" + this.props.match.params.id,
        student
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>studentName: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.onChangeStudentName}
              onChange={this.onChangeStudentName}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Edit Student Name"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
