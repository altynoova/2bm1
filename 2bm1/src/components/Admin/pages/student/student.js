import React from "react";
import { Accordion } from "react-bootstrap";

function student(props) {
  return (
    <Accordion.Item eventKey={props.index}>
      <Accordion.Header>{props.name}</Accordion.Header>
      <Accordion.Body>
        <div className="accordion-body_prop">
          <div>Id: </div>
          <div>{props.id}</div>
        </div>
        <div className="accordion-body_prop">
          <div>Name: </div>
          <div>{props.name}</div>
        </div>
        <div className="accordion-body_prop">
          <div>Birthday: </div>
          <div>{new Date(props.dateOfBirth).toLocaleDateString()}</div>
        </div>
        <div className="accordion-body_prop">
          <div>Astrological sign: </div>
          <div>{props.astrologicalSign}</div>
        </div>
        <div className="accordion-body_prop">
          <div>Motherland: </div>
          <div>{props.motherLand}</div>
        </div>
        <div className="accordion-body_prop">
          <div>Quote: </div>
          <div>{props.phrases}</div>
        </div>
        <div className="accordion-body_prop">
          <div>Profile photo: </div>
          <div>{props.profile}</div>
        </div>
        <div className="accordion-body_prop">
          <div>Photo1: </div>
          <div>{props.photo1}</div>
        </div>
        <div className="accordion-body_prop">
          <div>Photo2: </div>
          <div>{props.photo2}</div>
        </div>
        <div className="accordion-body_prop">
          <div>Photo3: </div>
          <div>{props.photo3}</div>
        </div>
        <div className="accordion-body_prop">
          <div>Photo4: </div>
          <div>{props.photo4}</div>
        </div>
        <div className="accordion-body_prop">
          <div>Instagram: </div>
          <div>{props.instagram}</div>
        </div>
        <div className="accordion-body_prop">
          <div>Telegram: </div>
          <div>{props.tg}</div>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default student;
