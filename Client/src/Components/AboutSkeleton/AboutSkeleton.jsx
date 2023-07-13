import React from "react";
import "./AboutSkeleton.css";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Stepper, Step, StepLabel } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const AboutSkeleton = ({ aboutBottomData, servicesData }) => {
	const [activeStep, setActiveStep] = React.useState(0);

	const handleClick = (index) => {
		setActiveStep(index === activeStep ? null : index);
	};

	return (
		<SkeletonTheme
			baseColor="rgba(255, 255, 255, 0.1)"
			highlightColor="rgba(255, 255, 255, 0.05)"
			animationSpeed={1}
		>
			<div className="AboutTop">
				<div
					className="AboutLeft"
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Skeleton height={250} width={400} />
					<p>
						<Skeleton count={5} height={10} width={370} />
					</p>
				</div>
				<div
					className="AboutRight"
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<h3>
						<Skeleton width={200} height={20} />
					</h3>
					<Stepper
						orientation="vertical"
						activeStep={activeStep}
						style={{
							alignItems: "flex-start",
							justifyContent: "flex-start",
							height: "90%",
							width: "100%",
							overflow: "auto",
						}}
					>
						{servicesData.slice(1).map((service, index) => (
							<Step key={index} onClick={() => handleClick(index)}>
								<StepLabel icon={<Skeleton width={30} height={30} circle />}>
									<AnimatePresence>
										{activeStep === index ? (
											<motion.div
												className="StepperLabelActive"
												style={{
													border: "2px solid rgba(255, 255, 255, 0.1)",
												}}
											>
												<div className="StepperTitle">
													<h4>
														<Skeleton width={300} height={15} />
													</h4>
													&nbsp;
												</div>
												<p>
													<Skeleton count={2} height={10} width={370} />
												</p>
												<div className="Tags">
													{service.tech.map((tech, index) => (
														<div
															className="Tag flex items-center bg-teal-400/10 px-2 py-1  leading-5 text-teal-300"
															key={index}
														>
															<p>
																<Skeleton width={50} height={10} />
															</p>
														</div>
													))}
												</div>
											</motion.div>
										) : (
											<div className="StepperTitle">
												<h4>
													<Skeleton width={300} height={15} />
												</h4>
											</div>
										)}
									</AnimatePresence>
								</StepLabel>
							</Step>
						))}
					</Stepper>
				</div>
			</div>
			<div className="AboutBottom">
				{aboutBottomData.map((item, index) => (
					<div className="AboutBottomItem" key={index}>
						<div
							className="AboutBottomItemIcon"
							style={{
								border: "none",
							}}
						>
							<Skeleton width={50} height={50} circle />
						</div>
						<div className="AboutBottomItemText">
							<h4>
								<Skeleton width={100} height={10} />
							</h4>
							{item.title === "Experience" ? (
								<p>
									<p>
										<Skeleton width={50} height={10} />
									</p>
								</p>
							) : (
								<p>
									<Skeleton height={10} width={50} />
								</p>
							)}
						</div>
					</div>
				))}
			</div>
		</SkeletonTheme>
	);
};

export default AboutSkeleton;
