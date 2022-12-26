import React, { useState, useContext, useRef } from "react";
import AppContext from "../../../Context";
import Student from "./student/Student";
import { Accordion } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Students() {
  const nameRef = useRef();

  const { students, studentRequest } = useContext(AppContext);

  const [studentId, setId] = useState(0),
    [studentName, setName] = useState(""),
    [studentBirthday, setBirthday] = useState(""),
    [studentSign, setSign] = useState(""),
    [studentMotherland, setMotherland] = useState(""),
    [studentQuote, setQuote] = useState(""),
    [studentProfilePhoto, setProfilePhoto] = useState(""),
    [studentPhoto1, setPhoto1] = useState(""),
    [studentPhoto2, setPhoto2] = useState(""),
    [studentPhoto3, setPhoto3] = useState(""),
    [studentPhoto4, setPhoto4] = useState(""),
    [studentInstagram, setInstagram] = useState(""),
    [studentTelegram, setTelegram] = useState(""),
    onInputId = ({ target: { value } }) => {
      setId(value);
    },
    onInputName = ({ target: { value } }) => {
      setName(value);
    },
    onInputBirthday = ({ target: { value } }) => {
      setBirthday(value);
    },
    onInputSign = ({ target: { value } }) => {
      setSign(value);
    },
    onInputMotherland = ({ target: { value } }) => {
      setMotherland(value);
    },
    onInputQuote = ({ target: { value } }) => {
      setQuote(value);
    },
    onInputProfile = ({ target: { value } }) => {
      setProfilePhoto(value);
    },
    onInputPhoto1 = ({ target: { value } }) => {
      setPhoto1(value);
    },
    onInputPhoto2 = ({ target: { value } }) => {
      setPhoto2(value);
    },
    onInputPhoto3 = ({ target: { value } }) => {
      setPhoto3(value);
    },
    onInputPhoto4 = ({ target: { value } }) => {
      setPhoto4(value);
    },
    onInputInstagram = ({ target: { value } }) => {
      setInstagram(value);
    },
    onInputTg = ({ target: { value } }) => {
      setTelegram(value);
    };

  const onSubmit = (method) => {
    const data = {
      name: studentName,
      dateOfBirth: new Date(studentBirthday),
      astrologicalSign: studentSign,
      motherLand: studentMotherland,
      phrases: studentQuote,
      profile: studentProfilePhoto,
      photo1: studentPhoto1,
      photo2: studentPhoto2,
      photo3: studentPhoto3,
      photo4: studentPhoto4,
      instagram: studentInstagram,
      tg: studentTelegram,
    };

    if (method !== "POST") data.id = studentId;

    console.log(data);
    studentRequest(data, method);
  };

  const mapStudents = () => {
    return students.map((student, index) => (
      <Student key={index} {...student} index={index} eventKey={index} />
    ));
  };
  return (
    <>
      <Accordion defaultActiveKey="0">{mapStudents()}</Accordion>

      <Form id="students-form">
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>Student ID</Form.Label>
          <Form.Control
            ref={nameRef}
            type="number"
            placeholder="Student ID"
            controlId="id"
            onChange={onInputId}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Student's name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Student's name"
            controlId="name"
            onChange={onInputName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCode">
          <Form.Label>Student's birthday</Form.Label>
          <Form.Control
            type="text"
            placeholder="Student's birthday"
            controlId="code"
            onChange={onInputBirthday}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCode">
          <Form.Label>Student's sign</Form.Label>
          <Form.Control
            type="text"
            placeholder="Student's sign"
            controlId="code"
            onChange={onInputSign}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCode">
          <Form.Label>Student's motherland</Form.Label>
          <Form.Control
            type="text"
            placeholder="Student's motherland"
            controlId="code"
            onChange={onInputMotherland}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCode">
          <Form.Label>Student's quote</Form.Label>
          <Form.Control
            type="text"
            placeholder="Student's quote"
            controlId="code"
            onChange={onInputQuote}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCode">
          <Form.Label>Student's profile photo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Student's profile photo"
            controlId="code"
            onChange={onInputProfile}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCode">
          <Form.Label>Student's photo 1</Form.Label>
          <Form.Control
            type="text"
            placeholder="Student's photo 1"
            controlId="code"
            onChange={onInputPhoto1}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCode">
          <Form.Label>Student's photo 2</Form.Label>
          <Form.Control
            type="text"
            placeholder="Student's photo 2"
            controlId="code"
            onChange={onInputPhoto2}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCode">
          <Form.Label>Student's photo 3</Form.Label>
          <Form.Control
            type="text"
            placeholder="Student's photo 3"
            controlId="code"
            onChange={onInputPhoto3}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCode">
          <Form.Label>Student's photo 4</Form.Label>
          <Form.Control
            type="text"
            placeholder="Student's photo 4"
            controlId="code"
            onChange={onInputPhoto4}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCode">
          <Form.Label>Student's instagram</Form.Label>
          <Form.Control
            type="text"
            placeholder="Student's instagram"
            controlId="code"
            onChange={onInputInstagram}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCode">
          <Form.Label>Student's telegram</Form.Label>
          <Form.Control
            type="text"
            placeholder="Student's telegram"
            controlId="code"
            onChange={onInputTg}
          />
        </Form.Group>

        <Button
          className="form-btn"
          variant="primary"
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            onSubmit("POST");
          }}
        >
          Add student
        </Button>
        <Button
          className="form-btn"
          variant="primary"
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            onSubmit("PUT");
          }}
        >
          Update student
        </Button>
        <Button
          className="form-btn"
          variant="primary"
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            onSubmit("DELETE");
          }}
        >
          Delete student
        </Button>
      </Form>
    </>
  );
}

export default Students;
