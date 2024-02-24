import React, { useState, useEffect } from "react";
import "./Projects.css";
import axios from "axios";
import Project from "./Project";
import { Helmet } from "react-helmet";

const Projects = () => {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// Fetch projects from the API
		const fetchProjects = async () => {
			try {
				const response = await axios.get(
					"https://quaint-portfolio.vercel.app/api/projects"
				);
				setProjects(response.data);
			} catch (error) {
				setError("An error occurred while fetching projects.");
			} finally {
				setLoading(false);
			}
		};

		fetchProjects();
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
					{loading ? (
						<div className="Load">
							<i class="fa-solid fa-circle-notch fa-spin"></i>
						</div>
					) : error ? (
						<p>{error}</p>
					) : (
						projects.map((project) => (
							<Project key={project._id} item={project} />
						))
					)}
				</div>
			</div>
		</div>
	);
};

export default Projects;
