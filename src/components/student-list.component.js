import React, { Component } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Student = props => (
    <tr>
        <td>{props.student.studentName} | GRADE: {props.student.gradeLevel}</td>
        <td>
            <Link to={"/edit/" + props.student._id}>edit</Link> | {' '} 
            <Button href ="#" variant='outline-danger' onClick={() => {props.deleteStudent(props.student._id)}}>delete</Button>
        </td>
    </tr>
)

export default class StudentList extends Component {
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

  deleteStudent = (id) => {
    axios.delete("http://localhost:5000/students/" + id)
      .then(response => console.log(response.data))

    //refresh the screen 
    this.setState({
      students: this.state.students.filter(el => el._id !== id)
    })
  }

  studentList = () => {
    return this.state.students.map(currentStudent => {
        return <Student student = {currentStudent} deleteStudent = {this.deleteStudent} key={currentStudent._id} />
    })    
  }

  render() {
    return (
      <div>
        <h3>Students</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Student</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.studentList()}</tbody>
        </table>
      </div>
    );
  }
}
