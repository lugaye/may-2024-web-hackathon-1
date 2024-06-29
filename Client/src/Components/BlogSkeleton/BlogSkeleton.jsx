import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./BlogSkeleton.css";

const BlogSkeleton = ({ item }) => {
	return (
		<SkeletonTheme
			baseColor="rgba(255, 255, 255, 0.1)"
			highlightColor="rgba(255, 255, 255, 0.05)"
			animationSpeed={1}
		>
			<div className="BlogSkeleton">
				<div className="SkeletonBlog">
					<div className="BlogSkeletonLeft">
						<div className="BlogImage">
							<Skeleton height={100} width={150} />
						</div>
						<div className="LeftMore">
							<div className="LeftTop">
								<p>
									<Skeleton width={150} />
								</p>
							</div>
							<div className="LeftBottom">
								<div className="Views">
									<p>
										<Skeleton width={50} />
									</p>
								</div>
								<div className="Likes">
									<p>
										<Skeleton width={50} />
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="SkeletonBlogRight">
						<div className="BlogTitle">
							<h2>
								<Skeleton width={270} />
							</h2>
						</div>
						<div className="SkeletonBlogDescription">
							<p>
								<Skeleton count={3} width={250} height={10} />
							</p>
						</div>
						<div className="Star">
							<Skeleton width={30} />
						</div>

						<div className="Tags">
							{item.tags.map((tag, index) => (
								<div
									className="Tag flex items-center bg-teal-400/10 px-1 py-0.5  leading-5 text-teal-300"
									key={index}
								>
									<p>
										<Skeleton width={50} />
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</SkeletonTheme>
	);
};

export default BlogSkeleton;
