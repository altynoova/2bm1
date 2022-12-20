import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {TableControl} from 'react-bootstrap-table-control'

function Lessons() {
  const [lessonId, setId] = useState(0),
        [lessonCode, setCode] = useState(''),
        [lessonName, setName] = useState(''),
        onInputId = ({target: {value}}) => {
          setId(value);
        },
        onInputCode = ({target: {value}}) => {
          setCode(value);
        },
        onInputName = ({target: {value}}) => {
          setName(value);
        }



  const onSubmit = (type) => {
    const data = {
      id: lessonId,
      code: lessonCode,
      name: lessonName,
    }
    console.log(data, type);
  }

  return (
    <>
      <div className="lessons-list">
        <TableControl
          header={[
            { key: "id", name: "Id" },
            { key: "code", name: "Code" },
            { key: "name", name: "Name" },
          ]}
          itens={[
            { id: 1, code: "Name 1", name: "Description 1" },
            { id: 2, code: "Name 2", name: "Description 2" },
            { id: 3, code: "Name 3", name: "Description 3" },
            { id: 4, code: "Name 4", name: "Description 4" },
            { id: 5, code: "Name 5", name: "Description 5" },
          ]}
        />
      </div>

      <Form id="lessons-form">
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>Lesson ID</Form.Label>
          <Form.Control type="number" placeholder="Lesson ID" controlId="id"  onChange={onInputId}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCode">
          <Form.Label>Lesson code</Form.Label>
          <Form.Control type="text" placeholder="Lesson code" controlId="code" onChange={onInputCode}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Lesson name</Form.Label>
          <Form.Control type="text" placeholder="Lesson name" controlId="name" onChange={onInputName}/>
        </Form.Group>

        <div className="mb-3">
          <Form.Check
          className="radio-btn"
            inline
            label="Add lesson"
            name="group1"
            type='radio'
          />
          <Form.Check
          className="radio-btn"
            inline
            label="Update lesson"
            name="group1"
            type='radio'
          />
          <Form.Check
          className="radio-btn"
            inline
            label="Delete lesson"
            name="group1"
            type='radio'
          />
        </div>

        <Button className="form-btn" variant="primary" type="submit" onClick={(event) => {event.preventDefault(); onSubmit('POST')}}>
          Add lesson
        </Button>
        <Button className="form-btn" variant="primary" type="submit" onClick={(event) => {event.preventDefault(); onSubmit('UPDATE')}}>
          Update lesson
        </Button>
        <Button className="form-btn" variant="primary" type="submit" onClick={(event) => {event.preventDefault(); onSubmit('DELETE')}}>
          Delete lesson
        </Button>
      </Form>
    </>
  );
}

export default Lessons;
