import React from "react";
import "./ProductSkeleton.css";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ProductSkeleton = ({ product }) => {
	return (
		<SkeletonTheme
			baseColor="rgba(255, 255, 255, 0.1)"
			highlightColor="rgba(255, 255, 255, 0.05)"
			animationSpeed={1}
		>
			<div className="SkeletonProduct">
				<Skeleton height={130} width={260} />
				<span>
					<Skeleton width={150} className="ProductTitle" />
				</span>
				<div className="SkeletonBody">
					<p>
						<Skeleton count={2} height={10} width={260} />
					</p>
				</div>
				<div className="ProductBottom">
					<div className="TopSide">
						{product.price !== "Free" ? (
							<p className="ProductPrice">
								<Skeleton width={50} />
							</p>
						) : (
							<p className="ProductPrice">
								<Skeleton width={50} />
							</p>
						)}
						<div className="Ratings">
							{Array(5)
								.fill()
								.map((_, index) => (
									<SkeletonTheme
										key={index}
										baseColor="rgba(255, 255, 255, 0.1)"
										highlightColor="rgba(255, 255, 255, 0.05)"
										animationSpeed={1}
									>
										<i className="fas fa-star"></i>
									</SkeletonTheme>
								))}
						</div>
					</div>
					<div className="SkeletonTags flex">
						{product.tags.map((tag) => (
							<div className="SkeletonTag" py-1 px-1>
								<p>
									<Skeleton width={30} height={7} />
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</SkeletonTheme>
	);
};

export default ProductSkeleton;
