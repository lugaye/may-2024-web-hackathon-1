import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Blog = ({ item, isLoading }) => {
	const getTimeLabel = (date) => {
		const currentTime = new Date();
		const timeDifference = Math.abs(currentTime - date);
		const hoursDifference = Math.ceil(timeDifference / (1000 * 60 * 60));

		if (hoursDifference < 24) {
			return "Today";
		} else if (hoursDifference < 48) {
			return "Yesterday";
		} else {
			return date.toLocaleDateString();
		}
	};

	return (
		<>
			{isLoading ? (
				<div className="BlogSkeleton">
					{/* ... your skeleton loading component */}
				</div>
			) : (
				<motion.div
					className="Blog"
					onClick={() => window.open(item.link, "_blank")}
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					<div className="BlogLeft">
						<motion.div
							className="BlogImage"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2, duration: 0.5 }}
						>
							<img src={item.image} alt={item.name} />
						</motion.div>
						<div className="LeftMore">
							<div className="LeftTop">
								<p>{getTimeLabel(new Date(item.createdAt))}</p>
							</div>
							<div className="LeftBottom">
								<motion.div
									className="Views"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4, duration: 0.5 }}
								>
									<i className="fas fa-eye"></i>
									<p>{item.reads}</p>
								</motion.div>
								<motion.div
									className="Likes"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.6, duration: 0.5 }}
								>
									<i className="fas fa-heart"></i>
									<p>{item.likes}</p>
								</motion.div>
							</div>
						</div>
					</div>
					<div className="BlogRight">
						<motion.div
							className="BlogTitle"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2, duration: 0.5 }}
						>
							<h2>{item.name}</h2>
							<i className="fas fa-arrow-right"></i>
						</motion.div>
						<div className="BlogDescription">
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4, duration: 0.5 }}
							>
								{item.description}
							</motion.p>
						</div>
						<div className="Star">
							{item.starred === true && <i className="fas fa-star"></i>}
						</div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6, duration: 0.5 }}
							className="BlogLink"
						>
							<i className="fas fa-link"></i>
							<Link to={item.link}>{item.name}</Link>
						</motion.div>
						<div className="Tags">
							{item.tags.map((tag, index) => (
								<motion.div
									className="Tag flex items-center bg-teal-400/10 px-1 py-0.5  leading-5 text-teal-300"
									key={index}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.6, duration: 0.5 }}
								>
									<p>{tag}</p>
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>
			)}
		</>
	);
};

export default Blog;
