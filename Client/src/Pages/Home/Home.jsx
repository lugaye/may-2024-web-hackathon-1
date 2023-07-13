import React from "react";
import "./Home.css";
import Undraw from "../../assets/react-undraw.svg";
import HomeSkeleton from "../../Components/HomeSkeleton/HomeSkeleton.JSX";
import { Fade, Zoom } from "@mui/material";
const Home = () => {
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);
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
							<button>
								<a href="" target="_blank" rel="noreferrer">
									<i className="fas fa-download"></i> CV
								</a>
							</button>
							<button>
								<a href="" target="_blank" rel="noreferrer">
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
