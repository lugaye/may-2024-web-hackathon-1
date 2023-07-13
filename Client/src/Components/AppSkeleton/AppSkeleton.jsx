import React from "react";
import "./AppSkeleton.css";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const AppSkeleton = () => {
	return (
		<SkeletonTheme
			baseColor="rgba(255, 255, 255, 0.1)"
			highlightColor="rgba(255, 255, 255, 0.05)"
			animationSpeed={1}
		>
			<div className="AppSkeleton">
				<div className="AppSkeletonContainer">
					<Skeleton className="AppSkeletonItem" height={580} width={920} />
				</div>
			</div>
		</SkeletonTheme>
	);
};

export default AppSkeleton;
