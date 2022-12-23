import React from "react";
import AppContext from "../../../Context";
import Student from "./student/student";
import Table from 'react-bootstrap/Table';

function Students() {
  const { students } = React.useContext(AppContext);
  const mapStudents = () => {
    return students.map((student, index) => (
      <Student key={index} {...student} index={index} eventKey={index} />
    ));
  };
  return (
    <Table striped bordered hover>
      <tbody>
        {mapStudents()}
      </tbody>
    </Table>
  );
}

export default Students;
