import React, { useState } from "react";
import "./Blogs.css";
import { blogsData } from "../../../Data";
import Blog from "../../Components/Blog/Blog";

const Blogs = () => {
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
					<h1>Blogs</h1>
				</div>
				<div className="BlogItems">
					{blogsData.map((item, index) => (
						<Blog item={item} key={index} isLoading={isLoading} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Blogs;
