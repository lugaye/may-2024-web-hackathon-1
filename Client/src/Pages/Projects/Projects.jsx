import React from "react";
import "./Projects.css";
import { projectsData } from "../../../Data";
import Project from "./Project";

const Projects = () => {
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	return (
		<div className="Main">
			<div className="Container">
				<div className="Title">
					<h1>Projects</h1>
				</div>
				<div className="ProjectItems">
					{projectsData.map((item, index) => (
						<Project item={item} key={index} isLoading={isLoading} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
