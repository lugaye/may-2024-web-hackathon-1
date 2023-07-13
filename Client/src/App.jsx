import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Mainbar from "./Components/Mainbar/Mainbar";

const App = () => {
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (event) => {
		const { clientX, clientY } = event;
		setCursorPosition({ x: clientX, y: clientY });
	};

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
			<div className="AppLeft w-1/5 h-screen">
				<div className="SidebarContainer">
					<Sidebar />
				</div>
			</div>
			<div className="AppRight w-4/5 h-screen">
				<Mainbar />
			</div>
		</div>
	);
};

export default App;
