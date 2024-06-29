import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AppSkeleton from "./Components/AppSkeleton/AppSkeleton";

const About = lazy(() => import("./Pages/About/About"));
const Contact = lazy(() => import("./Pages/Contacts/Contacts"));
const Home = lazy(() => import("./Pages/Home/Home"));
const Projects = lazy(() => import("./Pages/Projects/Projects"));
const Skills = lazy(() => import("./Pages/Skills/Skills"));
const Products = lazy(() => import("./Pages/Products/Products"));
const Blogs = lazy(() => import("./Pages/Blogs/Blogs"));

const SidebarPages = () => {
	return (
		<React.Fragment>
			<Suspense fallback={<AppSkeleton />}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/blogs" element={<Blogs />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/products" element={<Products />} />
				</Routes>
			</Suspense>
		</React.Fragment>
	);
};

export default SidebarPages;
