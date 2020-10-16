import React, { Component } from "react";
import axios from "axios";
export default class CreateStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentName: "",
      students: []
    };
  }

  componentDidMount() {
    axios.get('http:/localhost:5000/students/')
        .then(response => {
            if(response.data.length > 0) {
                this.setState({
                    students: response.data.map(student => student.studentName),
                    studentName: response.data[0].studentName
                })
            }
        }).catch((error) => console.log(error))
  }

  onChangeStudentName = (e) => {
    this.setState({ studentName: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const student = {
      studentName: this.state.studentName,
    };

    console.log(student)

    axios
      .post("http://localhost:5000/students/add", student)
      .then((res) => console.log(res.data));

    window.location = "/";
  };

  render() {
    return (
      <div>
        <h3>Create Student</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>StudentName: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.studentName}
              onChange={this.onChangeStudentName}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Student"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
