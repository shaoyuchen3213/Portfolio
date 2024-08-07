import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shaoyu Chen </span>
            from <span className="purple"> China.</span>
            <br />
            I am a full-stack software engineer with 5 years of hands-on experience gained 
            through various personal and academic projects. 
            <br />
            My expertise spans front-end and back-end technologies, 
            allowing me to build comprehensive and efficient web applications.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Quantitative Analysis
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shaoyu Chen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
