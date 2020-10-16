import React, { Component } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'

const Student = props => (
    <tr>
        <td>{props.student.studentName}</td>
        <td>
            <Link to={"/edit/" + props.student._id}>edit</Link>
        </td>
    </tr>
)

export default class CourseList extends Component {
  constructor(props) {
    super(props);

    this.state = { students: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/students/")
      .then((res) => this.setState({ students: res.data }))
      .catch((error) => console.log(error));
  }

  studentList = () => {
    return this.state.students.map(currentStudent => {
        return <Student student = {currentStudent} key={currentStudent._id} />
    })    
  }

  render() {
    return (
      <div>
        <h3>Students</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>student</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.studentList()}</tbody>
        </table>
      </div>
    );
  }
}
