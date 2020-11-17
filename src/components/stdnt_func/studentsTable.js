import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function AcccessibleTable() {
  const classes = useStyles();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("/api/students/").then(({ data: students }) => {
      setStudents(students);
    });
  }, []);

  const deleteStudent = (id) => {
    axios.delete("/api/students/" + id).then((res) => console.log(res.data));

    //return all elements not equal to id we just removed
    setStudents(students.filter((el) => el._id !== id));
  };

  return (
    <TableContainer component={Paper}>
      <Table classemail={classes.table} aria-label="caption table">
        <caption>Advanced Stem Learning</caption>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Student Email</TableCell>
            <TableCell>Grade</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((stdnt) => (
            <TableRow key={stdnt._id}>
              <TableCell>{stdnt.firstName}</TableCell>
              <TableCell>{stdnt.lastName}</TableCell>
              <TableCell>{stdnt.email}</TableCell>
              <TableCell>{stdnt.grade}</TableCell>
              <TableCell>
                <Link to={"/editStudent/" + stdnt._id}>edit</Link> |{" "}
                <IconButton
                  onClick={() => deleteStudent(stdnt._id)}
                  aria-label="delete"
                  className={classes.margin}
                  color='inherit'
                >
                  <DeleteIcon fontSize="small"/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
