import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import BlogSkeleton from "../BlogSkeleton/BlogSkeleton";
import { Fade, Zoom } from "@mui/material";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Blog = ({ item, isLoading }) => {
	const getTimeLabel = (date) => {
		const currentTime = new Date();
		const timeDifference = Math.abs(currentTime - date); // Time difference in milliseconds
		const hoursDifference = Math.ceil(timeDifference / (1000 * 60 * 60)); // Convert milliseconds to hours

		if (hoursDifference < 24) {
			return "Today";
		} else if (hoursDifference < 48) {
			return "Yesterday";
		} else {
			return date.toLocaleDateString(); // Display the full date
		}
	};
	return (
		<>
			{isLoading ? (
				<BlogSkeleton item={item} />
			) : (
				<SkeletonTheme
					baseColor="rgba(255, 255, 255, 0.1)"
					highlightColor="rgba(255, 255, 255, 0.05)"
					animationSpeed={1}
				>
					<div className="Blog">
						<div className="BlogLeft">
							<div className="BlogImage">
								<Zoom in={true} timeout={1000}>
									<img src={item.image} alt={item.title} />
								</Zoom>
							</div>
							<div className="LeftMore">
								<div className="LeftTop">
									<p>Posted on:</p>
									<p>{getTimeLabel(new Date(item.posted))}</p>
								</div>
								<div className="LeftBottom">
									<div className="Views">
										<i className="fas fa-eye"></i>
										<p>{item.read}</p>
									</div>
									<div className="Likes">
										<i className="fas fa-heart"></i>
										<p>{item.likes}</p>
									</div>
								</div>
							</div>
						</div>
						<div className="BlogRight">
							<div className="BlogTitle">
								<h2>{item.title || <Skeleton width={200} />}</h2> &nbsp;
								<i className="fas fa-arrow-right"></i>
							</div>
							<div className="BlogDescription">
								<Fade in={true} timeout={1000}>
									<p>{item.description}</p>
								</Fade>
							</div>
							<div className="Star">
								<i className="fas fa-star"></i>
							</div>
							<div className="BlogLink">
								<i className="fas fa-link"></i>
								<Link to={item.link}>{item.title}</Link>
							</div>
							<div className="Tags">
								{item.tags.map((tag, index) => (
									<div
										className="Tag flex items-center bg-teal-400/10 px-1 py-0.5  leading-5 text-teal-300"
										key={index}
									>
										<p>{tag}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</SkeletonTheme>
			)}
		</>
	);
};

export default Blog;
