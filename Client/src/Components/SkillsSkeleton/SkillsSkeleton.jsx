import React from "react";
import "./SkillsSkeleton.css";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkillsSkeleton = ({ renderProfessionalItems }) => {
	return (
		<SkeletonTheme
			baseColor="rgba(255, 255, 255, 0.1)"
			highlightColor="rgba(255, 255, 255, 0.05)"
			animationSpeed={1}
		>
			<div className="SkillsTop SkillsSkele">
				<div className="SkillsLeft">
					<div className="SkillsContent">
						<p>
							<Skeleton count={5} height={10} width={370} />
						</p>
					</div>
				</div>
				<div className="SkillsRight">
					<div className="SkillsImage">
						<Skeleton height={300} width={400} />
					</div>
				</div>
			</div>
			<div className="SkillsBottom">
				<div className="Technical SkeletonTechnical">
					<div className="TechnicalTitle">
						<Skeleton width={250} className="TopSkeleton" />
					</div>
					<div className="TechnicalContent">
						<Skeleton count={3} height={15} width={370} className="" />
					</div>
				</div>
				<div
					className="SkeletonProfessional"
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						width: "100%",
						height: "100%",
					}}
				>
					<div className="SkeletonProfessionalTitle">
						<Skeleton width={250} className="TopSkeleton" />
					</div>
					<div className="SkeletonContent">
						<Skeleton height={90} width={90} circle />
						<Skeleton height={90} width={90} circle />
						<Skeleton height={90} width={90} circle />
						<Skeleton height={90} width={90} circle />
					</div>
				</div>
			</div>
		</SkeletonTheme>
	);
};

export default SkillsSkeleton;
