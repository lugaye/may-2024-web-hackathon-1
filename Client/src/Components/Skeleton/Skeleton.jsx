import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./Skeleton.css";

const SkeletonBody = () => {
	return (
		<SkeletonTheme
			baseColor="rgba(255, 255, 255, 0.1)"
			highlightColor="rgba(255, 255, 255, 0.05)"
			animationSpeed={1}
		>
			<div className="skeleton">
				<div className="skeletonItem">
					<div className="ItemTop">
						<Skeleton height={140} width={275} />
						<span>
							<Skeleton width={150} />
						</span>
					</div>
					<div className="SkeletonItemBody">
						<p>
							<Skeleton count={3} height={10} width={275} />
						</p>
					</div>
					<div className="SkeletonBottomPart">
						<div className="SkeletonItemLink">
							<span>
								<Skeleton width={200} height={10} />
							</span>
						</div>
						<div className="Tag">
							<span>
								<Skeleton width={50} />
							</span>
						</div>
					</div>
					<div className="SkeletonItemBottom">
						<div className="BottomTech">
							<span>
								<Skeleton width={200} />
							</span>
						</div>
						<div className="Users">
							<span>
								<Skeleton width={50} />
							</span>
						</div>
					</div>
				</div>
			</div>
		</SkeletonTheme>
	);
};

export default SkeletonBody;
