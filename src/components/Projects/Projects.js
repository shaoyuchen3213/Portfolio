import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import cruise from "../../Assets/Projects/landingpage.gif";
import Huskey from "../../Assets/Projects/Huskey.gif";
import Reggie from "../../Assets/Projects/takeout.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cruise}
              isBlog={false}
              title="Life Journey Curise"
              description="a sample platform where users can explore, plan, and book cruises. Our application uses a streamlined checkout process and user-friendly features --such as our AI chatbot -- to simplify the booking process and offer an enhanced user experience."
              ghLink="https://github.com/shaoyuchen3213/Life-Journey-Cruises"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Huskey}
              isBlog={false}
              title="Huskey Helpers E-commerce"
              description="This project designs and implements the product detail page for a retail online shop called Husky Helpers. Questions and Answers which contains features for question viewing, searching, asking a question and answering questions"
              ghLink="https://github.com/shaoyuchen3213/Huskey-Helper-Shopping-Platform"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="B"
              description="Project Atelier is a desktop and mobile friendly app utilizing Node.js, React and Express to provide a modern e-commerce portal that is not just functional, but also intuitive and user-friendly. The backend service created here utilizes NginX, PostgreSQL to create a seamless flow of data to the client, and allowing for horizontal scaling to handle increased traffic while maintaining low service response times."
              ghLink="https://github.com/shaoyuchen3213/Huskey-Helper-Products"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Reggie}
              isBlog={false}
              title="R"
              description="Login to the system, have full access to the backend system Staff: Login to the system, only can modify the order and meal Client: login through mobile device, search meal and add to the cart, setting address, make order."
              ghLink="https://github.com/shaoyuchen3213/Regiee_takeout"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>




        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
