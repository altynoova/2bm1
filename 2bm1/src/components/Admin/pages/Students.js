import React from "react";
import AppContext from "../../../Context";
import Accordion from "react-bootstrap/Accordion";
import Student from "./student/student";

function Students() {
  const { students } = React.useContext(AppContext);
  const mapStudents = () => {
    return students.map((student, index) => <Student key={index} {...student} eventKey={index} />);
  };
  return (
    <Accordion defaultActiveKey="0">
        {mapStudents()}
    </Accordion>);
}

export default Students;
