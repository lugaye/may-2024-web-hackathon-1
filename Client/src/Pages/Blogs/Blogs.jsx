import React, { useState } from "react";
import "./Blogs.css";
import Blog from "../../Components/Blog/Blog";
import axios from "axios";
import { Helmet } from "react-helmet";

const Blogs = () => {
	const [blogs, setBlogs] = useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	// fetch blogs from database
	React.useEffect(() => {
		axios.get("https://quaint-portfolio.vercel.app/api/blogs").then((res) => {
			setBlogs(res.data);
		});
	}, []);

	return (
		<div className="Main">
			<Helmet>
				<title>Blogs | Quaint</title>
				<meta
					name="description"
					content="View our blogs both from OptiSoft and personal level."
				/>
			</Helmet>
			<div className="Container">
				<div className="Title">
					<h1>Blogs</h1>
				</div>
				<div className="BlogItems">
					{blogs.map((blog) => (
						<Blog key={blog._id} item={blog} isLoading={isLoading} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Blogs;
