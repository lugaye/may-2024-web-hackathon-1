import React from "react";
import { Link } from "react-router-dom";
import SkeletonBody from "../../Components/Skeleton/Skeleton";
import { motion } from "framer-motion";

const Project = ({ item }) => {
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);
	return (
		<>
			<div className="Project">
				{isLoading ? (
					<SkeletonBody />
				) : (
					<motion.div
						className="ProjectItem"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
					>
						<div className="ItemTop">
							<motion.img
								src={item.image}
								alt={item.name}
								whileHover={{ scale: 1.1 }}
							/>
							<span>{item.name}</span>
						</div>
						<div className="ItemBody">
							<p>{item.description}</p>
						</div>
						<div className="BottomPart">
							<motion.div className="ItemLink" whileHover={{ scale: 1.05 }}>
								<i className="fas fa-link"></i>
								<Link to={item.link} target="_blank" rel="noopener noreferrer">
									{item.name}
								</Link>
							</motion.div>
							<div className="Tag">
								<i className="fas fa-tag"></i>
								<span>{item.type}</span>
							</div>
						</div>
						<div className="ItemBottom">
							<div className="Tags">
								{item.tags.map((tech, index) => (
									<motion.div
										className="Tag flex items-center bg-teal-400/10 px-1 py-0.5  leading-5 text-teal-300"
										key={index}
										whileHover={{ scale: 1.05 }}
									>
										<p>{tech}</p>
									</motion.div>
								))}
							</div>
							<div className="Users">
								<i className="fas fa-users"></i>
								<span>{item.users}</span>
							</div>
						</div>
					</motion.div>
				)}
			</div>
		</>
	);
};

export default Project;
