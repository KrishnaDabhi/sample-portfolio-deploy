import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import Particle from "../Components/Particles/Particle";

function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        <strong className="purple">My Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card" >
            <ProjectCards
              imgPath="/images/project1.png"
              title="Tracker Master"
              description=" Employee start work in office before then all employee is workIn , breakIn ,breackOut and WorkOut on that Tracker Master site is used and save data for daily , weekly and monthly. All employee details are saved in this project."
              tech="Tech-Stacks"
              techD="Html | CSS | Javascript | Mui | ReactJS | Redux "
              // link="https://zoomcar-backend.herokuapp.com/login"
              a="https://github.com/KrishnaDabhi/Tracker-Master"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/project2.png"
              
              title="Bazaar"
              
              description="User login and register in Bazzar Project after then purchased a multiple types of products. and I have used Mui cards , all data fetched in api integration.I added more functionality in my project."
              tech="Tech-Stacks"
              techD="Html | CSS | Javascript | Mui | ReactJS | Redux | Api Integration"
              // link="https://pinterest-clone-raoji.netlify.app/"
              a="https://github.com/KrishnaDabhi/Bazaar"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/healthmug.png"
              title="HealtMug clone"
              description="Healthmug is an E-commerce website providing medicines at the most reasonable prices, This is collaborative project built by a team of 5 executed in 7 days."
              tech="Tech-Stacks"
              techD="Html | CSS | Javascript"
              // link="https://salavisushant.github.io/Healthmug-final.github.io/"
              a="https://github.com/KrishnaDabhi/Healthmug-clone-cw-project"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/bewakoof.png"
              title="Bewakoof clone"
              description="Bewakoof is a lifestyle fashion brand that makes creative and distinctive fashion apparel, This is a solo project build by me and executed in 5 days."
              tech="Tech-Stacks"
              techD="Html | CSS | Javascript"
              // link="https://raojipatil.github.io/Bewakoof.github.io/"
              a="https://github.com/KrishnaDabhi/Bewakoof-Website-Clone-main_Master"
            />
          </Col>

         


        </Row>
      </Container>
    </Container>
  );
}
export default Projects;



