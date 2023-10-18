import React from 'react';

import { 
	FaGitAlt, 
	FaGithub, 
	FaHtml5, 
	FaCss3Alt, 
	FaJsSquare, 
	FaBootstrap, 
	FaNode, FaReact, 
	FaNpm, 
	FaCloudDownloadAlt 
} 
from "react-icons/fa";
import { SiHeroku, SiGraphql, SiMysql, } from "react-icons/si";
import { DiJqueryLogo, DiMongodb } from "react-icons/di";
import myResume from '../../assets/images/Coding-Resume.pdf';
import { Col, Row } from 'react-bootstrap';

function Resume() {
    return (
        
            <div 
			style={{
				padding:"80px",
			}}>
				<h1 className="page-header">My Resume</h1>
				<a  href={myResume} download id="resume">
					Download <FaCloudDownloadAlt />
				</a>
			
				<Row id="profs" >
					<Col>
						<h5>Developer Proficiencies</h5>
						<ol>
							<li>Git <FaGitAlt /></li>
							<li>GitHub <FaGithub /></li>
							<li>Heroku <SiHeroku /></li>
							<li>Insomnia </li>
							<li>IntelliJ Idea </li>
							<li>AWS Primary Role</li>
						</ol>
						<br></br>
					</Col>
					<Col>
						<h5>Front-End Proficiencies</h5>
						<ol>
							<li>HTML5 <FaHtml5 /></li>
							<li>CSS3 <FaCss3Alt /></li>
							<li>Java</li>
							<li>JavaScript <FaJsSquare /></li>
							<li>jQuery <DiJqueryLogo /></li>
							<li>Reactjs <FaReact /></li>
							<li>Bootstrap <FaBootstrap /></li>
							<li>MDBootstrap</li>
							<li>Django</li>
							
						</ol>
						<br></br>
					</Col>
					<Col>
						<h5>Back-End Proficiencies</h5>
						<ol>
							<li>AWS</li>
							<li>Nodejs  <FaNode /></li>
							<li>Expressjs <FaNpm /></li>
							<li>MySQL <SiMysql /></li>
							<li>Sequelize</li>
							<li>MongoDB  <DiMongodb /></li>
							<li>Mongoose</li>
							<li>GraphQL <SiGraphql /></li>
							<li>APIs</li>
							<li>MVC</li>
							<li>PWA</li>
							<li>Python</li>
						</ol>
					</Col>
				</Row>
			</div>
		
    );
}

export default Resume;