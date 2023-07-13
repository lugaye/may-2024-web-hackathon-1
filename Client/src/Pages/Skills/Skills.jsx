import React, { useState } from "react";
import "./Skills.css";
import Dev from "../../assets/dev.svg";
import { professionalSkillsData, technicalSkillsData } from "../../../Data";
import CircularProgressBar from "../../Components/CircularProgressBar/CircularProgressBar";
import SkillsSkeleton from "../../Components/SkillsSkeleton/SkillsSkeleton";
import { Fade, Zoom } from "@mui/material";
import { motion } from "framer-motion";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Skills = () => {
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);
	const carouselItemsPerPage = 3;
	const professionalItemsPerPage = 4;
	const [currentSlide, setCurrentSlide] = useState(0);
	const [currentProfessionalSlide, setCurrentProfessionalSlide] = useState(0);
	const totalSlides = Math.ceil(
		technicalSkillsData.length / carouselItemsPerPage
	);
	const totalProfessionalSlides = Math.ceil(
		professionalSkillsData.length / professionalItemsPerPage
	);

	const handleSlideChange = (slideIndex) => {
		setCurrentSlide(slideIndex);
	};

	const handleProfessionalSlideChange = (slideIndex) => {
		setCurrentProfessionalSlide(slideIndex);
	};

	const renderCarouselItems = () => {
		const startIndex = currentSlide * carouselItemsPerPage;
		const endIndex = startIndex + carouselItemsPerPage;
		const carouselItems = technicalSkillsData.slice(startIndex, endIndex);

		return carouselItems.map((item, index) => (
			<div
				className={`TechnicalContentItem ${currentSlide === 0 ? "active" : ""}`}
				key={startIndex + index}
			>
				<div className="ItemLabel">
					{item.icon}
					<h1>{item.title}</h1>
				</div>
				<div className="Progress">
					<div className="Bar">
						<div
							className="ProgressBar"
							style={{
								width: `${item.value}%`,
								backgroundColor: "var(--txt-teal)",
							}}
						/>
					</div>
					<p>{item.value}%</p>
				</div>
			</div>
		));
	};

	const renderProfessionalItems = () => {
		const startIndex = currentProfessionalSlide * professionalItemsPerPage;
		const endIndex = startIndex + professionalItemsPerPage;
		const professionalItems = professionalSkillsData.slice(
			startIndex,
			endIndex
		);

		return professionalItems.map((item, index) => (
			<div
				className={`ProfessionalContentItem ${
					currentProfessionalSlide === 0 ? "active" : ""
				}`}
				key={startIndex + index}
			>
				<CircularProgressBar progress={item.value} text={item.title} />
			</div>
		));
	};

	return (
		<SkeletonTheme
			baseColor="rgba(255, 255, 255, 0.1)"
			highlightColor="rgba(255, 255, 255, 0.05)"
			animationSpeed={1}
		>
			<div className="Main">
				<div className="Container">
					{isLoading ? (
						<SkillsSkeleton
							totalSlides={totalSlides}
							currentSlide={currentSlide}
							handleSlideChange={handleSlideChange}
							renderCarouselItems={renderCarouselItems}
							totalProfessionalSlides={totalProfessionalSlides}
							currentProfessionalSlide={currentProfessionalSlide}
							handleProfessionalSlideChange={handleProfessionalSlideChange}
							renderProfessionalItems={renderProfessionalItems}
						/>
					) : (
						<>
							<div className="SkillsTop">
								<div className="SkillsLeft">
									<div className="Title">
										<h1>Skills</h1>
									</div>
									<div className="SkillsContent">
										<Fade in={true} timeout={1000}>
											<p>
												I possess a strong proficiency in crafting visually
												appealing and responsive web interfaces, developing
												dynamic applications, and implementing robust backend
												solutions. My commitment to staying updated with
												industry trends enables me to deliver impactful web
												experiences that drive successful projects.
											</p>
										</Fade>
									</div>
								</div>
								<div className="SkillsRight">
									<div className="SkillsImage">
										<Zoom in={true} timeout={1000}>
											<img src={Dev} alt="image" />
										</Zoom>
									</div>
								</div>
							</div>
							<div className="SkillsBottom">
								<Fade in={true} timeout={1000}>
									<div className="Technical">
										<div className="TechnicalTitle">
											<h1>Technical</h1>
										</div>
										<Fade in={true} timeout={1000}>
											<motion.div
												animate={{ x: 0 }}
												initial={{ x: 100 }}
												transition={{ duration: 1 }}
												className="TechnicalContent"
											>
												{renderCarouselItems()}
											</motion.div>
										</Fade>
										<div className="CarouselPagination">
											{Array.from(Array(totalSlides)).map((_, index) => (
												<button
													className={`PaginationDot ${
														currentSlide === index ? "active" : ""
													}`}
													key={index}
													onClick={() => handleSlideChange(index)}
												/>
											))}
										</div>
									</div>
								</Fade>
								<Fade in={true} timeout={1000}>
									<div className="Professional">
										<div className="ProfessionalTitle">
											<h1>Professional</h1>
										</div>
										<Fade in={true} timeout={1000}>
											<div className="ProfessionalContent">
												{renderProfessionalItems()}
											</div>
										</Fade>
										<div className="CarouselPagination">
											{Array.from(Array(totalProfessionalSlides)).map(
												(_, index) => (
													<button
														className={`PaginationDot ${
															currentProfessionalSlide === index ? "active" : ""
														}`}
														key={index}
														onClick={() => handleProfessionalSlideChange(index)}
													/>
												)
											)}
										</div>
									</div>
								</Fade>
							</div>
						</>
					)}
				</div>
			</div>
		</SkeletonTheme>
	);
};

export default Skills;
