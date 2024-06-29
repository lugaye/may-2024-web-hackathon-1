import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { navData } from "../../../Data";
import { Link } from "react-router-dom";
import Quaint from "../../assets/quaint.png";
import { motion } from "framer-motion";

const Sidebar = ({ sidebarToggle, handleSidebarItemClick }) => {
	// State for toggling sidebar visibility and managing active menu item
	const [toggle, setToggle] = useState(false);
	const [active, setActive] = useState(
		localStorage.getItem("activeItem") || "Home"
	);

	// Handle click on sidebar item
	const handleClick = (e) => {
		const selectedItem = e.target.innerText;
		setActive(selectedItem);
		handleSidebarItemClick(); // Call the function to close the sidebar
		localStorage.setItem("activeItem", selectedItem); // Store the active item in local storage
	};

	// Effect to toggle sidebar based on sidebarToggle prop
	useEffect(() => {
		setToggle(sidebarToggle);
	}, [sidebarToggle]);

	return (
		<div className="SidebarContainer">
			<div className="Sidebar flex flex-col justify-center items-center p-2">
				<div className="Toggler">
					{toggle ? (
						<motion.i
							className="fas fa-times"
							onClick={() => setToggle(!toggle)}
							initial={{ opacity: 0, rotate: 0 }}
							animate={{ opacity: 1, rotate: 45 }}
							transition={{ duration: 0.3 }}
						></motion.i>
					) : (
						<motion.i
							className="fas fa-bars"
							onClick={() => setToggle(!toggle)}
							initial={{ opacity: 0, rotate: 0 }}
							animate={{ opacity: 1, rotate: 90 }}
							transition={{ duration: 0.3 }}
						></motion.i>
					)}
				</div>
				<div className="SidebarTop">
					<div className="ProfilePic flex justify-center items-center">
						<img src={Quaint} alt="avatar" className="SidebarAvatar" />
					</div>
					<div className="ProfileName">
						<span>Victor Kirui</span>
						<small>Quaint</small>
						<p>
							Software <small>&</small> ML Engineer
						</p>
						<div className="SocialIcons">
							<a
								href="https://www.linkedin.com/in/victor-kirui-193aa4222/"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fab fa-linkedin-in"></i>
							</a>
							<a
								href="https://github.com/Techsupport254"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fab fa-github"></i>
							</a>
							<a
								href="mailto:victorquaint@gmail.com"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fas fa-envelope"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="SidebarItems">
					{/* Mapping through navigation data to render sidebar links */}
					{navData.map((item, index) => (
						<Link
							key={index}
							to={item.path}
							className={`SidebarItemLink ${
								active === item.title ? "Active" : ""
							}`}
							onClick={handleClick}
						>
							<motion.div
								className="SidebarItem"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								{item.item}
								<div className="Icon text-teal-300 ">{item.icon}</div>
								<span>{item.title}</span>
							</motion.div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
