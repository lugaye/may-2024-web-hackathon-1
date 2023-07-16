import React, { useEffect } from "react";
import "./Home.css";
import Undraw from "../../assets/react-undraw.svg";
import HomeSkeleton from "../../Components/HomeSkeleton/HomeSkeleton.JSX";
import { Fade, Zoom } from "@mui/material";

const Home = () => {
	const [isLoading, setIsLoading] = React.useState(true);
	const [generating, setGenerating] = React.useState(false);

	React.useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	const handleDownload = () => {
		setGenerating(true);
		const link = document.createElement("a");
		link.href =
			"https://drive.google.com/uc?export=download&id=1OX6gk1fJRD9e5n8I5vGmr82g0TtV6PLQ"; // Direct download link
		link.download = "Quaint.pdf"; // Specify the file name
		link.click();
	};

	useEffect(() => {
		if (generating) {
			setTimeout(() => {
				setGenerating(false);
			}, 3000);
		}
	}, [generating]);

	return (
		<div className="Home">
			{isLoading ? (
				<HomeSkeleton />
			) : (
				<>
					<div className="HomeContainer">
						<Fade in={true} timeout={1500}>
							<div className="HomeTop">
								<div className="HomeTopLeft">
									<h1 className="HomeTopLeftTitle">Hello World!</h1>
									<Fade in={true} timeout={2000}>
										<p className="HomeTopLeftText">
											I'm{" "}
											<span style={{ color: "#64ffda", fontWeight: "bolder" }}>
												Victor Quaint
											</span>
											, a Full Stack Developer with expertise in MERN stack and
											a Machine Learning Engineer. I combine my passion for
											building robust web applications with my knowledge of
											machine learning algorithms to create innovative
											solutions. Explore my work and projects to see how I bring
											creativity and technical expertise together.
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
										<i class="fa-solid fa-circle-notch fa-spin"></i> &nbsp;
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
				</>
			)}
		</div>
	);
};

export default Home;
