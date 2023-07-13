import React from "react";
import "./Sidebar.css";
import { navData } from "../../../Data";
import { Link } from "react-router-dom";
import Quaint from "../../assets/quaint.png";

const Sidebar = () => {
	const [active, setActive] = React.useState("Home");
	const handleClick = (e) => {
		setActive(e.target.innerText);
	};

	return (
		<div className="Sidebar flex flex-col justify-center items-center p-2">
			<div className="SidebarTop">
				{<i className="fas fa-menu"></i>}
				<div className="ProfilePic flex justify-center items-center">
					<img src={Quaint} alt="avatar" className="SidebarAvatar" />
				</div>
				<div className="ProfileName">
					<span>
						Victor Kirui
						<small>(Quaint)</small>
					</span>
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
						<a href="" target="_blank" rel="noreferrer">
							<i className="fab fa-github"></i>
						</a>
						<a href="" target="_blank" rel="noreferrer">
							<i className="fas fa-envelope"></i>
						</a>
						<a href="" target="_blank" rel="noreferrer">
							<i className="fab fa-instagram"></i>
						</a>
					</div>
				</div>
			</div>
			<div className="SidebarItems">
				{navData.map((item, index) => {
					return (
						<>
							<Link
								key={index}
								to={item.path}
								className={`SidebarItemLink ${
									active === item.title ? "Active" : ""
								}`}
							>
								<div className="SidebarItem" onClick={handleClick}>
									{item.item}
									<div className="Icon  text-teal-300 ">{item.icon}</div>
									<span>{item.title}</span>
								</div>
							</Link>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default Sidebar;
