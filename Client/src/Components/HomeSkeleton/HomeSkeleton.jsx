import React from "react";
import "./HomeSkeleton.css";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const HomeSkeleton = () => {
	return (
		<SkeletonTheme
			baseColor="rgba(255, 255, 255, 0.1)"
			highlightColor="rgba(255, 255, 255, 0.05)"
			animationSpeed={1}
		>
			<div className="Main">
				<div className="HomeContainer">
					<div className="SkeletonTop">
						<div className="SkeletonLeft">
							<span>
								<Skeleton width={250} className="TopSkeleton" />
							</span>
							<p>
								<Skeleton count={5} height={10} width={370} />
							</p>
							<div className="SkeletonBottom">
								<button>
                                    <Skeleton width={100} height={30} />
								</button>
								<button>
                                    <Skeleton width={100} height={30} />
								</button>
							</div>
						</div>
						<div className="SkeletonRight">
							<Skeleton height={300} width={350} />
						</div>
					</div>
				</div>
			</div>
		</SkeletonTheme>
	);
};

export default HomeSkeleton;
