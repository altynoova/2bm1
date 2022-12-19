import React from "react";
import { Accordion } from "react-bootstrap";
import MainForm from "../form/Form";

function student(props) {
  const renderInputs = (obj) => {
    const inputs = [];
    for (let item in obj) {
      inputs.push(
        <div className="studentProps">
          <div>{item} : </div>
          <div contentEditable="true">{obj[item]}</div>
        </div>
      );
    }
    return inputs;
  };

  return (
    <Accordion.Item eventKey={props.eventKey}>
      <Accordion.Header>{props.Name}</Accordion.Header>
      <Accordion.Body style={{ color: "black" }}>
        <MainForm>

        </MainForm>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default student;
