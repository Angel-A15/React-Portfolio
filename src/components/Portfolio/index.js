import React from "react";
import Project from "../Project";

import project1 from "../../assets/images/project1.jpeg";
import project2 from "../../assets/images/project2.jpeg";
import project3 from "../../assets/images/project3.jpeg";
import project4 from "../../assets/images/project4.jpeg";

const Portfolio = (singleProject) => {
  const projectList = [
    {
      title: "LiftoSphere",
      summary: "The application is a social network for individuals who have an interest in health and fitness can share their thoughts, make friends, and communicate.",
      image: project3,
      technologies: "Node.js, JavaScript, GraphQl, React, Mern, Bootstrap.css, Express, nodemon, mongoose",
      deployedLink: "https://liftosphere1.herokuapp.com/",
      github: "https://github.com/MarkAnthony9014/fitness-project-3",
    },
    {
      title: "Alluda",
      summary: "The application serves by providing users resources to reach out for help wether its abuse or pertaining to mental health.",
      image: project2,
      technologies: "Node.js, Handlebars, JavaScript, BootStrap.css, Express",
      deployedLink: "https://alluda1.herokuapp.com/",
      github: "https://github.com/PivotalSaint/alluda",
    },
    {
      title: "Drie Name Generator",
      summary: "This applications' function serves to generate a name based on gender, nationality, and age.",
      image: project1,
      technologies: "Javascript, HTML, Node.js, BootStrap.js",
      deployedLink: "https://angel-a15.github.io/Drie-Name-Generator/",
      github: "https://github.com/Angel-A15/Drie-Name-Generator",
    },
    {
      title: "Python-Mech-Shop",
      summary: "Inquired by a local automotive shop, this application will provide business with digital transactions, marketing, and accessibilty.",
      image: project4,
      technologies: "Python, Django, MDBootstrap(Bootstrap 4/5), JS, HTML, and CSS",
      deployedLink: "https://angel-a15.github.io/Python-mech-shop-temp-display/",
      github: "https://github.com/Angel-A15/Python-Mech-Shop",
    }
  ];

  return (
    <div key={singleProject.title} className="container" id="conMarg">
      <div className="row " id="projRow">
          {projectList.map((singleProject) => (
            <Project singleProject={singleProject}/>
        ))}
      </div>
    </div>
  );
};
export default Portfolio;