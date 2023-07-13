import React from "react";
import { Link } from "react-router-dom";
import SkeletonBody from "../../Components/Skeleton/Skeleton";
import { Zoom } from "@mui/material";

const Project = ({ item, isLoading }) => {
	return (
		<>
			<div className="Project">
				{isLoading ? (
					<SkeletonBody />
				) : (
					<div className="ProjectItem">
						<div className="ItemTop">
							<Zoom in={true} timeout={1000}>
								<img src={item.image} alt={item.title} />
							</Zoom>
							<span>{item.title}</span>
						</div>
						<div className="ItemBody">
							<p>{item.description}</p>
						</div>
						<div className="BottomPart">
							<div className="ItemLink">
								<i className="fas fa-link"></i>
								<Link to={item.link} target="_blank" rel="noopener noreferrer">
									{item.title}
								</Link>
							</div>
							<div className="Tag">
								<i className="fas fa-tag"></i>
								<span>{item.tag}</span>
							</div>
						</div>
						<div className="ItemBottom">
							<div className="Tags">
								{item.tech.map((tech, index) => (
									<div
										className="Tag flex items-center bg-teal-400/10 px-1 py-0.5  leading-5 text-teal-300"
										key={index}
									>
										<p>{tech}</p>
									</div>
								))}
							</div>
							<div className="Users">
								<i className="fas fa-users"></i>
								<span>{item.users}</span>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Project;
