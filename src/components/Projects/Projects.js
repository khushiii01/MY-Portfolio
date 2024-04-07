import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import FoodFiesta from "../../Assets/Projects/Foodfiesta.png";
import LuxeEstate from "../../Assets/Projects/LuxeEstate.png";
import ThreadsApp from "../../Assets/Projects/ThreadsApp.png";

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
              imgPath={LuxeEstate}
              isBlog={false}
              title="LuxEstate"
              description="LuxEstate is a comprehensive online platform designed and developed using the MERN stack (MongoDB,Express.js, React, Node.js). Key Features: User Registration and Authentication, Property Listing and Management (Buy, Sell, RentProperties), Wishlist, Search and Filters Functionality, Integration of AWS Services(Amazon S3, Amazon SES,AWS Bucket)"
              ghLink="https://github.com/Sejal2819/LuxeEstate"
              demoLink="https://luxestatee.netlify.app/"
            />
          </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ThreadsApp}
              isBlog={false}
              title="ThreadsApp"
              description="Developed a real-time, React-based web application using Next.js and TypeScript, backed by MongoDB for data storage.Implemented a dynamic platform for users to create and engage in threaded discussions by posting and commenting on threads in real time, fostering community interaction."
              ghLink="https://github.com/Sejal2819/Threads"
              demoLink="https://threads-sable.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FoodFiesta}
              isBlog={false}
              title="FoodFiesta"
              description="Created a ReactJS website with an API for browsing and viewing authentic recipes, featuring user registration, social sharing, personalized recommendations, filters, meal planning, nutritional information, and reviews"
              ghLink="https://github.com/Sejal2819/FoodFiesta"
              demoLink="https://food-fiesta-nine.vercel.app/"
            />
          </Col>
         </Row>
      </Container>
    </Container>
  );
}

export default Projects;
