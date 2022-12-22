import React from "react";
import { Accordion } from "react-bootstrap";

function student(props) {
  console.log(props);
  const renderInputs = (obj) => {
    const inputs = [];
    for (let item in obj) {
      inputs.push(
        <div className="studentProps">
          <div>{item} : </div>
          <div>{obj[item]}</div>
        </div>
      );
    }
    return inputs;
  };

  return <div>{renderInputs(props)}</div>;
}

export default student;
