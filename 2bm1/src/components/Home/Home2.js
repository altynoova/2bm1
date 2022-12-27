import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              We're <span className="purple"> Manas 2bm1 </span>
            </h1>
            <p className="home-about-body">
              We fell in love with programming and We have at least learnt
              something, We think… 🤷‍♂️
              <br />
              <br />
              What we like?
              <i>
                <b className="purple"> Yemek, Javascript and Selim Hoca. </b>
              </i>
              <br />
              <br />
              We like having parties.&nbsp;
              <i>
                <b className="purple">Going to theaters </b> and Marsel's
                office.
                <b className="purple">
                  Playing videogames and celebrating our birthdays.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, We also do our
              <b className="purple"> Homeworks</b>
            </p>
            <blockquote className="blockquote mb-0">
              <h4 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                БИЗДИН ДЕВИЗ
              </h4>
              <p style={{ textAlign: "justify" }}>
                No hugs & kisses,
                <br />
                only bugs & fixes
                <br />
                No dates, only updates
                <br />
                No crush,only crash
                <br />
                No romance, only maintenance
                <br />
                No hagging, only debugging
                <br />
                No rest, only test
                <br />
                No smile, only compile
                <br />
                No one trustable, only variable
                <br />
              </p>
            </blockquote>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Binqie"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/channel/UC6fDLO6IvHxU-QvzrZORTHA"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/manas_2bm1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
