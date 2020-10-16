import React, { Component } from "react";

export default class CreateStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentName: "",
    };
  }

  onChangeStudentName = (e) => {
    this.setState({ studentName: e.target.value });
  };

  onSubmit = () => {};

  render() {
    return (
      <div>
        <h3>Create Student</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>StudentName: </label>
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
              value="Create Student"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
