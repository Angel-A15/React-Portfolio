import React from "react";
import { Card } from "react-bootstrap";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = ({ singleProject }) => {
  return (

    <Card
      style={{
        width: "30rem",
        backgroundColor: "#EAF4D3" 
      }}
      key={singleProject.title} className="col-3" id="project"
    >
    
      <Card.Title id="textOne" style={{ margin: "15px", fontSize: "27px", color: "#094067"}}>
        {singleProject.title}
      </Card.Title>
      <Card.Text className="mb-2 text-muted" id="textTwo" style={{ fontSize: "15px", margin: "20px 0px 20px 10px" }}>{singleProject.summary}</Card.Text>
      <Card.Img
        variant="top"
        src={singleProject.image}
        alt={singleProject.title}
        style={{ position: "relative" }}
      />
      <Card.Body style={{ backgroundColor: "#EAF4D3"}}>
        <Card.Text id="textThird" style={{ fontSize: "17px" }} className="text-muted">
          {"Built with: "}
          <Card.Text id="textTwo" style={{ fontSize: "15px" }} className="text-muted" >{singleProject.technologies}</Card.Text>
        </Card.Text>
      </Card.Body> 
      <Card.Footer
        style={{
          backgroundColor: "#EAF4D3",
          padding: "5px 20px 5px 20px",
        }}
      >
        <a 
          href={singleProject.github} 
          rel="noopener noreferrer"
          target="_blank"
          className="card-text"
          id="logo">
          <FaGithub id="textFour" style={{ fontSize: "30px" }}/>
        </a>
        <a
          
          href={singleProject.deployedLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="card-text"
          id="logo"
        >
          <FaExternalLinkAlt id="textFive" style={{ fontSize: "25px" }}/>
        </a>
      </Card.Footer>
    
   </Card>
  );
};

export default Projects;