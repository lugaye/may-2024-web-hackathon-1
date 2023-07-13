// navbar data
export const navData = [
	{
		id: 1,
		title: "Home",
		path: "/",
		icon: <i className="fas fa-home"></i>,
	},
	{
		id: 2,
		title: "About",
		path: "/about",
		icon: <i className="fas fa-user"></i>,
	},
	{
		id: 3,
		title: "Skills",
		path: "/skills",
		icon: <i className="fas fa-cogs"></i>,
	},
	{
		id: 4,
		title: "Projects",
		path: "/projects",
		icon: <i className="fas fa-project-diagram"></i>,
	},
	{
		id: 5,
		title: "Blogs",
		path: "/blogs",
		icon: <i className="fas fa-blog"></i>,
	},
	{
		id: 6,
		title: "Contacts",
		path: "/contact",
		icon: <i className="fas fa-phone"></i>,
	},
	{
		id: 7,
		title: "Products",
		path: "/products",
		icon: <i className="fas fa-shopping-cart"></i>,
	},
];

// services data

export const servicesData = [
	{
		label: "Software Development",
		icon: <i className="fab fa-react"></i>,
		description:
			"Building dynamic web applications using React, Node.js, Express, MongoDB, and MySQL.",
		tech: ["React", "Node.js", "Express", "MongoDB", "MySQL"],
	},
	{
		label: "SEO",
		icon: <i className="fas fa-search"></i>,
		description:
			"Optimizing websites and content for search engines to increase organic traffic.",
		tech: ["Google Analytics", "Google Search Console", "Google Ads"],
	},
	{
		label: "Data Science",
		icon: <i className="fas fa-chart-line"></i>,
		description:
			"Data analysis and visualization using Python and its libraries.",
		tech: ["Python", "Pandas", "Numpy", "Matplotlib", "Scikit-Learn"],
	},
	{
		label: "Social Media Marketing",
		icon: <i class="fa-solid fa-square-poll-vertical"></i>,
		description:
			"Creating and managing social media campaigns and ads for promoting businesses and audiece engagement on different platforms.",
		tech: ["Facebook", "Instagram", "Twitter", "LinkedIn"],
	},
	{
		label: "Graphic Design",
		icon: <i className="fas fa-palette"></i>,
		description:
			"Creating visually appealing designs, i.e logos, banners, and other graphic content.",
		tech: ["MS Word", "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign"],
	},
];

// About bottom data

export const aboutBottomData = [
	{
		id: 1,
		title: "Awards",
		value: 12,
		icon: <i className="fas fa-award"></i>,
	},
	{
		id: 2,
		title: "Projects",
		value: 20,
		icon: <i className="fas fa-project-diagram"></i>,
	},
	{
		id: 3,
		title: "Clients",
		value: 20,
		icon: <i className="fas fa-users"></i>,
	},
	{
		id: 4,
		title: "Experience",
		value: 2,
		icon: <i className="fas fa-calendar-alt"></i>,
	},
];

//technical Skills data

export const technicalSkillsData = [
	{
		id: 1,
		title: "HTML",
		value: 90,
		icon: <i className="fab fa-html5"></i>,
	},
	{
		id: 2,
		title: "CSS",
		value: 80,
		icon: <i className="fab fa-css3-alt"></i>,
	},
	{
		id: 3,
		title: "JS",
		value: 70,
		icon: <i className="fab fa-js"></i>,
	},
	{
		id: 4,
		title: "MERN",
		value: 80,
		icon: <i className="fab fa-react"></i>,
	},
	{
		id: 5,
		title: "MySQL",
		value: 65,
		icon: <i className="fas fa-database"></i>,
	},
	{
		id: 6,
		title: "Python",
		value: 70,
		icon: <i className="fab fa-python"></i>,
	},
	{
		id: 7,
		title: "ML",
		value: 70,
		icon: <i className="fas fa-robot"></i>,
	},
	{
		id: 8,
		title: "Data Analysis",
		value: 75,
		icon: <i className="fas fa-chart-line"></i>,
	},
	{
		id: 9,
		title: "Data Viz",
		value: 70,
		icon: <i className="fas fa-chart-bar"></i>,
	},

	{
		id: 10,
		title: "SEO",
		value: 80,
		icon: <i className="fas fa-search"></i>,
	},
	{
		id: 11,
		title: "Marketing",
		value: 70,
		icon: <i className="fas fa-bullhorn"></i>,
	},
	{
		id: 12,
		title: "Graphic Design",
		value: 60,
		icon: <i className="fas fa-palette"></i>,
	},
];

// professional skills data

export const professionalSkillsData = [
	{
		id: 1,
		title: "Communication",
		value: 90,
	},
	{
		id: 2,
		title: "Teamwork",
		value: 80,
	},
	{
		id: 3,
		title: "Problem Solving",
		value: 70,
	},
	{
		id: 4,
		title: "Time Management",
		value: 80,
	},
	{
		id: 5,
		title: "Leadership",
		value: 85,
	},
	{
		id: 6,
		title: "Creativity",
		value: 70,
	},
	{
		id: 7,
		title: "Critical Thinking",
		value: 75,
	},
	{
		id: 8,
		title: "Decision Making",
		value: 70,
	},
];

// projects data
import codax from "./src/assets/codax.png";
import agrisolve from "./src/assets/agrisolve.png";
import saveLeo from "./src/assets/saveleo.png";
import kitchen from "./src/assets/Kitchen.png";
import amazon from "./src/assets/amazon.jpeg";
import kdp from "./src/assets/kdp.png";
export const projectsData = [
	{
		id: 1,
		title: "AgriSolve E-Commerce",
		description:
			"An e-commerce website built using React, Redux, Node.js, Express, MongoDB, and Stripe.",
		image: agrisolve,
		users: 100,
		tag: "Commercial",
		tech: ["MERN", "Redux", "Stripe", "MPesa"],
		link: "https://64a9a4a990908322a0ade04c--agrisolve.netlify.app/",
	},
	{
		id: 2,
		title: "CoDax Shop",
		description:
			"An e-commerce website built using React, Redux, Node.js, Express, MongoDB, and Stripe.",
		image: codax,
		tag: "Collaboration",
		users: "Public",
		tech: ["MERN", "Redux", "Stripe"],
		link: "https://candid-hotteok-7b47c3.netlify.app/",
	},
	{
		id: 3,
		title: "Kitchen360 By JK",
		description:
			"An e-commerce website built using React, Redux, Node.js, Express, MongoDB, and Stripe.",
		image: kitchen,
		users: "Public",
		tag: "Commercial",
		tech: ["React", "Redux", "Firebase", "Stripe"],
		link: "https://kitchen360.co.ke/",
	},
	{
		id: 4,
		title: "KDP Data Analysis",
		description:
			"An e-commerce website built using React, Redux, Node.js, Express, MongoDB, and Stripe.",
		image: kdp,
		users: "Public",
		tag: "Freelance",
		tech: ["Ipynb", "Pandas", "Numpy", "Matplotlib", "yfinance"],
		link: "https://github.com/Techsupport254/KDP",
	},
	{
		id: 5,
		title: "Save Leo",
		description:
			"An e-commerce website built using React, Redux, Node.js, Express, MongoDB, and Stripe.",
		image: saveLeo,
		users: "Public",
		tag: "Personal",
		tech: ["MERN", "Redux", "Stripe", "MPesa"],
		link: "https://github.com/Techsupport254/savings-plan-app",
	},
	{
		id: 6,
		title: "Amazon Stock Price Analysis",
		description:
			"An e-commerce website built using React, Redux, Node.js, Express, MongoDB, and Stripe.",
		image: amazon,
		users: "Public",
		tag: "Freelance",
		tech: ["Tableau", "Python", "Pandas"],
		link: "https://public.tableau.com/app/profile/victor.quaint/viz/AmazonStockPriceAnalysis/Dashboard1",
	},
];

// blogs data
import blog1 from "./src/assets/web-dev.svg";
import blog2 from "./src/assets/preview.svg";

export const blogsData = [
	{
		id: 1,
		title: "How to become a web developer",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		image: blog1,
		link: "https://www.google.com",
		tags: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe"],
		read: 2314,
		likes: 123,
		posted: "2023-07-06T09:15:14.722Z",
	},
	{
		id: 2,
		title: "How to become a web developer",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		image: blog2,
		link: "https://www.google.com",
		tags: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe"],
		read: 954,
		likes: 235,
		posted: "2023-07-06T09:43:31.976Z",
	},
	{
		id: 3,
		title: "How to become a web developer",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		image: blog1,
		link: "https://www.google.com",
		tags: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe"],
		read: 234,
		likes: 52,
		posted: "2023-07-06T09:53:40.075Z",
	},
	{
		id: 4,
		title: "How to become a web developer",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		image: blog2,
		link: "https://www.google.com",
		tags: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe"],
		read: 763,
		likes: 241,
		posted: "2023-07-06T11:58:40.098Z",
	},
	{
		id: 5,
		title: "How to become a web developer",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		image: blog1,
		link: "https://www.google.com",
		tags: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe"],
		read: 546,
		likes: 63,
		posted: "2023-07-06T14:40:59.595Z",
	},
	{
		id: 6,
		title: "How to become a web developer wfygwiakdjhoaufgvwiabfjw",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		image: blog2,
		link: "https://www.google.com",
		tags: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe"],
		read: 53,
		likes: 12,
		posted: "2023-07-06T11:50:50.599Z",
	},
];

// products data
import flyer from "./src/assets/kdp.png";

export const productsData = [
	{
		id: 1,
		title: "Flyer",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		image: flyer,
		link: "https://www.google.com",
		tags: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe"],
		price: "Free",
		rating: 5,
	},
	{
		id: 2,
		title: "Flyer",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		image: flyer,
		link: "https://www.google.com",
		tags: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe"],
		price: 100,
		rating: 5,
	},
	{
		id: 3,
		title: "Flyer",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		image: flyer,
		link: "https://www.google.com",
		tags: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe"],
		price: 50,
		rating: 4,
	},
	{
		id: 4,
		title: "Flyer",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		image: flyer,
		link: "https://www.google.com",
		tags: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe"],
		price: "Free",
		rating: 3,
	},
	{
		id: 5,
		title: "Flyer",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		image: flyer,
		link: "https://www.google.com",
		tags: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe"],
		price: 100,
		rating: 5,
	},
	{
		id: 6,
		title: "Flyer",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		image: flyer,
		link: "https://www.google.com",
		tags: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe"],
		price: "Free",
		rating: 4,
	},
];
