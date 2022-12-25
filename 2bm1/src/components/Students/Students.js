import React from "react";
import StudentCard from "./StudentCard";
import AppContext from "../../Context";
import {Col, Row, Container} from 'react-bootstrap'

function Students() {
  const { students } = React.useContext(AppContext);

  const renderItems = () => {
    return students.map((obj, index) => (
      <Col md={4} className="project-card" key={index}>
        <StudentCard key={index} {...obj} />
      </Col>
    ));
  };

  return (
    <section className="expand">
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            Our students
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {renderItems()}
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Students;
