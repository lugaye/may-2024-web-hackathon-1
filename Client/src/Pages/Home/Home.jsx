import React, { useState, useEffect } from "react";
import Undraw from "../../assets/react-undraw.svg";
import HomeSkeleton from "../../components/HomeSkeleton/HomeSkeleton";
import { Fade, Zoom } from "@mui/material";
import { Helmet } from "react-helmet";
import "./Home.css";

const Home = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [generating, setGenerating] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	const handleDownload = () => {
		setGenerating(true);
		const link = document.createElement("a");
		link.href =
			"https://drive.usercontent.google.com/u/0/uc?id=1ccjmx2KizwUFQjrGFih7gpMwucu55rmv&export=download";
		link.download = "Quaint.pdf";
		link.click();
		setTimeout(() => {
			setGenerating(false);
		}, 3000);
	};

	return (
		<div className="Home">
			<Helmet>
				<title>Home | Quaint</title>
				<meta
					name="description"
					content="I'm Victor Quaint, CEO, OptiSoft and a Full Stack Developer with expertise in MERN stack and a Machine Learning Engineer. I combine my passion for building robust web applications with my knowledge of machine learning algorithms to create innovative solutions. Explore my work and projects to see how I bring creativity and technical expertise together."
				/>
			</Helmet>
			{isLoading ? (
				<HomeSkeleton />
			) : (
				<div className="HomeContainer">
					<Fade in={true} timeout={1500}>
						<div className="HomeTop">
							<div className="HomeTopLeft">
								<h1 className="HomeTopLeftTitle">Hello World!</h1>
								<Fade in={true} timeout={2000}>
									<p className="HomeTopLeftText">
										I'm{" "}
										<span style={{ color: "#64ffda", fontWeight: "bold" }}>
											Victor Quaint
										</span>
										, a Full Stack Developer with expertise in MERN stack and a
										Machine Learning Engineer. I combine my passion for building
										robust web applications with my knowledge of machine
										learning algorithms to create innovative solutions. Explore
										my work and projects to see how I bring creativity and
										technical expertise together.
									</p>
								</Fade>
							</div>
							<div className="HomeTopRight">
								<Zoom in={true} timeout={1000}>
									<img
										className="HomeTopRightImg"
										src={Undraw}
										alt="homepage"
									/>
								</Zoom>
							</div>
						</div>
					</Fade>
					<div className="HomeBottom">
						<button onClick={handleDownload}>
							{generating ? (
								<>
									<i className="fa-solid fa-circle-notch fa-spin"></i> &nbsp;
									Generating
								</>
							) : (
								<>
									<i className="fas fa-download"></i> &nbsp; Resume
								</>
							)}
						</button>
						<button>
							<a href="/contact" target="_blank" rel="noreferrer">
								Contact Me
							</a>
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Home;
