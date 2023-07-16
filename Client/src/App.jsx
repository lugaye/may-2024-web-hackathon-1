import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Mainbar from "./Components/Mainbar/Mainbar";
import { motion } from "framer-motion";

const App = () => {
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
	const [sidebarToggle, setSidebarToggle] = useState(false);
	const sidebarRef = useRef(null);

	const handleMouseMove = (event) => {
		const { clientX, clientY } = event;
		setCursorPosition({ x: clientX, y: clientY });
	};

	const handleSidebarToggle = () => {
		setSidebarToggle(!sidebarToggle);
	};

	const handleSidebarItemClick = () => {
		if (window.innerWidth <= 768) {
			setSidebarToggle(false);
		}
	};

	const handleOutsideClick = (event) => {
		if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
			setSidebarToggle(false);
		}
	};

	useEffect(() => {
		if (sidebarToggle) {
			document.addEventListener("mousedown", handleOutsideClick);
		} else {
			document.removeEventListener("mousedown", handleOutsideClick);
		}
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [sidebarToggle]);

	return (
		<div
			className="App bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900"
			onMouseMove={handleMouseMove}
		>
			<div
				className="cursor-highlight spotlight pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
				style={{
					left: cursorPosition.x + "px",
					top: cursorPosition.y + "px",
				}}
			></div>

			<div
				className="__variable_20b187 group/spotlight relative"
				style={{
					background:
						"radial-gradient(600px at 2094px 849.333px, rgba(29, 78, 216, 0.15), transparent 80%)",
				}}
			></div>

			{window.innerWidth > 768 || sidebarToggle ? (
				<motion.div
					className="AppLeft w-1/5 h-screen"
					ref={sidebarRef}
					initial={{ x: -500 }}
					animate={{ x: 0 }}
					transition={{ duration: 0.5 }}
				>
					<div className="SidebarContainer">
						<Sidebar
							sidebarToggle={sidebarToggle}
							handleSidebarItemClick={handleSidebarItemClick}
						/>
					</div>
				</motion.div>
			) : null}

			<div className="SidebarToggler">
				{sidebarToggle ? (
					<motion.i
						className="fas fa-times absolute top-0 right-0 m-4 text-2xl text-slate-400 cursor-pointer"
						onClick={handleSidebarToggle}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
					></motion.i>
				) : (
					<motion.i
						className="fas fa-bars absolute top-0 right-0 m-4 text-2xl text-slate-400 cursor-pointer"
						onClick={handleSidebarToggle}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
					></motion.i>
				)}
			</div>

			<div className="AppRight w-4/5 h-screen">
				<Mainbar />
			</div>
		</div>
	);
};

export default App;
