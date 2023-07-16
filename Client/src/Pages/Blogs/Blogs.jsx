import React, { useState } from "react";
import "./Blogs.css";
import Blog from "../../Components/Blog/Blog";
import axios from "axios";

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
		axios.get("http://localhost:4000/api/blogs").then((res) => {
			setBlogs(res.data);
		});
	}, []);

	return (
		<div className="Main">
			<div className="Container">
				<div className="Title">
					<h1>Blogs</h1>
				</div>
				<div className="BlogItems">
					{blogs.map((blog) => (
						<Blog
							key={blog._id}
							item={blog}
							isLoading={isLoading}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Blogs;
