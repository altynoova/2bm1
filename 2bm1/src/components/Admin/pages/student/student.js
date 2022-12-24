import React from "react";
import { Accordion } from "react-bootstrap";
import telegram from "../../../../Assets/telegram.png";
import instagram from "../../../../Assets/instagram.png";

function student(props) {
  return (
    <Accordion.Item eventKey={props.index}>
      <Accordion.Header>{props.Name}</Accordion.Header>
      <Accordion.Body>
        <div className="accordion-body_prop">
          <div>Id: </div>
          <div>{props.index}</div>
        </div>
        <div className="accordion-body_prop">
          <div>Name: </div>
          <div>{props.Name}</div>
        </div>
        <div className="accordion-body_prop">
          <div>Birthday: </div>
          <div>{props.DateOfBirth}</div>
        </div>
        <div className="accordion-body_prop">
          <div>Astrological sign: </div>
          <div>{props.AstrologicalSign}</div>
        </div>
        <div className="accordion-body_prop">
          <div>Motherland: </div>
          <div>{props.MotherLand}</div>
        </div>
        <div className="accordion-body_prop">
          <div>Quote: </div>
          <div>{props.Phrases}</div>
        </div>
        <div className="accordion-body_prop">
          <div>Profile photo: </div>
          <div>{props.Profile}</div>
        </div>
        <div className="accordion-body_prop">
          <div>Photo1: </div>
          <div>{props.Photo1}</div>
        </div>
        <div className="accordion-body_prop">
          <div>Photo2: </div>
          <div>{props.Photo2}</div>
        </div>
        <div className="accordion-body_prop">
          <div>Photo3: </div>
          <div>{props.Photo3}</div>
        </div>
        <div className="accordion-body_prop">
          <div>Photo4: </div>
          <div>{props.Photo4}</div>
        </div>
        <div className="accordion-body_prop">
          <div>Instagram: </div>
          <div>{props.Instagram}</div>
        </div>
        <div className="accordion-body_prop">
          <div>Telegram: </div>
          <div>{props.Tg}</div>
        </div>
      </Accordion.Body>
    </Accordion.Item>
    // <tr>
    //   <td>{props.index}</td>
    //   <td>
    //     <tr>
    //       <td>{props.Name}</td>
    //       <td>{props.DateOfBirth}</td>
    //       <td>{props.AstrologicalSign}</td>
    //       <td>{props.MotherLand}</td>
    //       <td>{props.Phrases}</td>
    //       <td>{props.Profile}</td>
    //       <td>{props.Photo1}</td>
    //       <td>{props.Photo2}</td>
    //       <td>{props.Photo3}</td>
    //       <td>{props.Photo4}</td>
    //       <td>{props.Instagram}</td>
    //       <td>{props.Tg}</td>
    //     </tr>
    //   </td>
    // </tr>
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
