import React from "react";
import { Accordion } from "react-bootstrap";

function student(props) {
  return (
    <tr>
      <td>{props.index}</td>
      <td>
        <tr>
          <td>{props.Name}</td>
          <td>{props.DateOfBirth}</td>
          <td>{props.AstrologicalSign}</td>
          <td>{props.MotherLand}</td>
          <td>{props.Phrases}</td>
          <td>{props.Profile}</td>
          <td>{props.Photo1}</td>
          <td>{props.Photo2}</td>
          <td>{props.Photo3}</td>
          <td>{props.Photo4}</td>
          <td>{props.Instagram}</td>
          <td>{props.Tg}</td>
        </tr>
      </td>
    </tr>
    // <tr>
    //   <td>{props.Name}</td>
    //   <td>{props.DateOfBirth}</td>
    //   <td>{props.AstrologicalSign}</td>
    //   <td>{props.MotherLand}</td>
    //   <td>{props.Phrases}</td>
    //   <td>{props.Profile}</td>
    //   <td>{props.Photo1}</td>
    //   <td>{props.Photo2}</td>
    //   <td>{props.Photo3}</td>
    //   <td>{props.Photo4}</td>
    //   <td>{props.Instagram}</td>
    //   <td>{props.Tg}</td>
    // </tr>
  );
}

export default student;
