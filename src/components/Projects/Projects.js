import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import devtalks from "../../Assets/Projects/dev-talks.png";
import rentalife from "../../Assets/Projects/rent-a-life.png";
import visitor from "../../Assets/Projects/visitor_management.png";
import ReactGA from "react-ga";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
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
              imgPath={rentalife}
              isBlog={false}
              title="Rent-a-Life"
              description="Rent-a-life is an online platform where user can sell/Rent their product,where in there is also features of housing as well with secure payment integration and a admin panel for all the inventory and security check of the products.. "
              link="https://github.com/AditiKulkarnii/Rent-Life"
              // liveLink="https://trallo-clone-mocha.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devtalks}
              isBlog={false}
              title="Dev-talks"
              description="A Web app to share information about different topics on trending technologies with features :
              Enabled user authentication with Google ensuring secure and streamlined access for users.
              Facilitate engagement by allowing users to create topics, posts, comment on posts, and reply to nested comments, enhancing community interaction, enable notifications.."
              link="https://github.com/AditiKulkarnii/DevTalks"
              liveLink="https://dev-talks-lilac.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCom}
              isBlog={false}
              title="Jsom Store"
              description="It is a basic e-commerce site which build in MERN tech stack. It has a features like login, signup as a part of authentication. Apart from that user add product in cart, modify quantity and also remove poduct in cart. It is a basic e-comerce site which build in pure html, css, reactjs and redux. You can watch live app in below button."
              link="https://github.com/MohitSojitra/e-commerce-store"
              liveLink="https://e-commerce-fronend.vercel.app/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={visitor}
              isBlog={false}
              title="Visitor management System"
              description="A system analyzes age, gender, and emotions of customers directly from CCTV or external camera. It provides a detailed report of customers' behavior, which can be used to improve customer service. It also provides an interface for admins to monitor and analyze customer behavior. "
              link="https://github.com/pateltisha24/Visitor-Management-System"
              liveLink="https://client-five-orcin.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aF}
              isBlog={false}
              title="Artistee Web"
              description="Aristee is a basic Full Stack websites which contains all the module such as a Admin Panel , Fronend Website and Backend. It inspired by united talent websites which is a use for book Artist for performing live shows
                            In here i used mainly aws services for handling backend things such as Amazon RDS for database, Amazon SES sercvice for mail perpose and S3 for storing images."
              link="https://github.com/MohitSojitra/Artistee"
              liveLink="https://artistee-fronend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aA}
              isBlog={false}
              title="Artistee Admin Pannel"
              description="Aristee is a basic Full Stack websites which contains all the module such as a Admin Panel , Fronend Website and Backend. It inspired by united talent websites which is a use for book Artist for performing live shows
                            In here i used mainly aws services for handling backend things such as Amazon RDS for database, Amazon SES sercvice for mail perpose and S3 for storing images."
              link="https://github.com/MohitSojitra/Artistee"
              liveLink="https://artistee-admin.vercel.app/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
