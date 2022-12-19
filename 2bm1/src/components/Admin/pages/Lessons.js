import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {TableControl} from 'react-bootstrap-table-control'

function Lessons() {
  return (
    <>
      <div className="lessons-list">
        <TableControl
          header={[
            { key: "id", name: "Id" },
            { key: "name", name: "Code" },
            { key: "description", name: "Name" },
          ]}
          itens={[
            { id: 1, name: "Name 1", description: "Description 1" },
            { id: 2, name: "Name 2", description: "Description 2" },
            { id: 3, name: "Name 3", description: "Description 3" },
            { id: 4, name: "Name 4", description: "Description 4" },
            { id: 5, name: "Name 5", description: "Description 5" },
            { id: 1, name: "Name 1", description: "Description 1" },
            { id: 2, name: "Name 2", description: "Description 2" },
            { id: 3, name: "Name 3", description: "Description 3" },
            { id: 4, name: "Name 4", description: "Description 4" },
            { id: 5, name: "Name 5", description: "Description 5" },
            { id: 1, name: "Name 1", description: "Description 1" },
            { id: 2, name: "Name 2", description: "Description 2" },
            { id: 3, name: "Name 3", description: "Description 3" },
            { id: 4, name: "Name 4", description: "Description 4" },
            { id: 5, name: "Name 5", description: "Description 5" },
          ]}
        />
      </div>

      <Form id="lessons-form">
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>Lesson ID</Form.Label>
          <Form.Control type="text" placeholder="Lesson ID" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCode">
          <Form.Label>Lesson code</Form.Label>
          <Form.Control type="text" placeholder="Lesson code" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Lesson name</Form.Label>
          <Form.Control type="text" placeholder="Lesson name" />
        </Form.Group>

        <Button className="form-btn add-btn" variant="primary" type="submit">
          Add lesson
        </Button>
        <Button className="form-btn update-btn" variant="primary" type="submit">
          Update lesson
        </Button>
        <Button className="form-btn delete-btn" variant="primary" type="submit">
          Delete lesson
        </Button>
      </Form>
    </>
  );
}

export default Lessons;
