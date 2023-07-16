import React from "react";
import "./Projects.css";
import axios from "axios";
import Project from "./Project";

const Projects = () => {
	const [projects, setProjects] = React.useState([]);
	// fetch projects from database
	React.useEffect(() => {
		axios.get("http://localhost:4000/api/projects").then((res) => {
			setProjects(res.data);
		});
	}, []);
	return (
		<div className="Main">
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
