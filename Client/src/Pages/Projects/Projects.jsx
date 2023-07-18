import React from "react";
import "./Projects.css";
import axios from "axios";
import Project from "./Project";
import { Helmet } from "react-helmet";
const Projects = () => {
	const [projects, setProjects] = React.useState([]);
	// fetch projects from database
	React.useEffect(() => {
		axios.get("https://quaint-portfolio.vercel.app/api/projects").then((res) => {
			setProjects(res.data);
		});
	}, []);
	return (
		<div className="Main">
			<Helmet>
				<title>Projects | Quaint</title>
				<meta
					name="description"
					content="View our projects both from OptiSoft and personal level."
				/>
			</Helmet>
			<div className="Container">
				<div className="Title">
					<h1>Projects</h1>
				</div>
				<div className="ProjectItems">
					{projects.map((project) => (
						<Project key={project._id} item={project} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
