import React, {useContext, useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {TableControl} from 'react-bootstrap-table-control'
import AppContext from "../../../Context";

function Lessons() {
  const {lessons, lessonsRequest} = useContext(AppContext)
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



  const onSubmit = (method) => {
    const data = {
      lessonscode: lessonCode || '',
      lessonsname: lessonName || '',
      link: '123'
    }

    if (method !== 'POST') data.id = lessonId

    console.log(data, method);
    lessonsRequest(data, method)
  }

  return (
    <>
      <div className="lessons-list">
        <TableControl
          header={[
            { key: "id", name: "Id" },
            { key: "lessonscode", name: "Code" },
            { key: "lessonsname", name: "Name" },
          ]}
          itens={lessons}
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

        <Button className="form-btn" variant="primary" type="submit" onClick={(event) => {event.preventDefault(); onSubmit('POST')}}>
          Add lesson
        </Button>
        <Button className="form-btn" variant="primary" type="submit" onClick={(event) => {event.preventDefault(); onSubmit('PUT')}}>
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
