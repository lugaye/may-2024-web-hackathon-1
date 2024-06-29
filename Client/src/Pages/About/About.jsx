import React, { useState, useEffect } from "react";
import "./About.css";
import WebDev from "../../assets/web-dev.svg";
import { Stepper, Step, StepLabel, Zoom, Fade } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { aboutBottomData, servicesData } from "../../../Data";
import AboutSkeleton from "../../Components/AboutSkeleton/AboutSkeleton";
import { Helmet } from "react-helmet";

const About = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [activeStep, setActiveStep] = useState(0);
	const [countValues, setCountValues] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	useEffect(() => {
		// Initialize count values for each item in aboutBottomData
		const initialCountValues = aboutBottomData.map((item) => ({
			title: item.title,
			count: 0,
		}));
		setCountValues(initialCountValues);

		// Update each count value over time
		const interval = setInterval(() => {
			setCountValues((prevCountValues) =>
				prevCountValues.map((item, index) => ({
					...item,
					count:
						item.count < aboutBottomData[index].value
							? item.count + 1
							: item.count,
				}))
			);
		}, 100);

		return () => clearInterval(interval);
	}, []);

	const handleClick = (index) => {
		setActiveStep(index === activeStep ? null : index);
	};

	return (
		<div className="Main">
			<Helmet>
				<title>About | Quaint</title>
				<meta
					name="description"
					content="I am a versatile Full Stack Web Developer with 2 years experience. Passionate about integrating Machine Learning concepts into web development for innovative and user-centric solutions. Seeking frontend development opportunities to leverage my skills and create impactful web experiences."
				/>
			</Helmet>

			<div className="Container">
				{isLoading ? (
					<AboutSkeleton
						servicesData={servicesData}
						aboutBottomData={aboutBottomData}
					/>
				) : (
					<>
						<div className="AboutTop">
							<div className="AboutLeft">
								<h3>About Me</h3>
								<Zoom in={true} timeout={1000}>
									<img src={WebDev} alt="WebDev" />
								</Zoom>
								<Fade in={true} timeout={1000}>
									<p>
										I am a versatile Full Stack Web Developer with 2 years
										experience. Passionate about integrating Machine Learning
										concepts into web development for innovative and
										user-centric solutions. Seeking frontend development
										opportunities to leverage my skills and create impactful web
										experiences.
									</p>
								</Fade>
							</div>

							<div className="AboutRight">
								<h3>What I Do</h3>
								<Fade in={true} timeout={1000}>
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
										{servicesData.map((service, index) => (
											<Step
												key={index}
												onClick={() => handleClick(index)}
												style={{
													cursor: "pointer",
													alignItems: "flex-start",
													justifyContent: "flex-start",
												}}
											>
												<StepLabel icon={service.icon}>
													<AnimatePresence>
														{activeStep === index ? (
															<Fade in={true} timeout={1000}>
																<motion.div
																	className="StepperLabelActive"
																	initial={{ opacity: 0, height: 0 }}
																	animate={{ opacity: 1, height: "auto" }}
																	exit={{ opacity: 0, height: 0 }}
																	transition={{ duration: 0.3 }}
																>
																	<div className="StepperTitle">
																		<h4>{service.label}</h4>&nbsp;
																		<i className="fas fa-chevron-up"></i>
																	</div>
																	<p>{service.description}</p>
																	<div className="Tags">
																		{service.tech.map((tech, index) => (
																			<div
																				className="Tag flex items-center bg-teal-400/10 px-2 py-1  leading-5 text-teal-300"
																				key={index}
																			>
																				<p>{tech}</p>
																			</div>
																		))}
																	</div>
																</motion.div>
															</Fade>
														) : (
															<div className="StepperTitle">
																<h4>{service.label}</h4>
																<i className="fas fa-chevron-down"></i>
															</div>
														)}
													</AnimatePresence>
												</StepLabel>
											</Step>
										))}
									</Stepper>
								</Fade>
							</div>
						</div>
						<div className="AboutBottom">
							{countValues.map((item, index) => (
								<div className="AboutBottomItem" key={index}>
									<div className="AboutBottomItemIcon">
										{aboutBottomData[index].icon}
									</div>
									<div className="AboutBottomItemText">
										<h4>{aboutBottomData[index].title}</h4>
										<AnimatePresence initial={false}>
											<motion.p
												key={item.count}
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												exit={{ opacity: 0 }}
												transition={{ duration: 0.5 }}
											>
												{item.title === "Experience"
													? `${item.count} yrs +`
													: `${item.count} +`}
											</motion.p>
										</AnimatePresence>
									</div>
								</div>
							))}
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default About;
