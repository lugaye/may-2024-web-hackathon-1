const express = require("express");
const router = express.Router();
const Project = require("../Models/ProjectModel");

// POST endpoint for creating a new project
router.post("/create", (req, res) => {
	const { name, description, image, link, tags, type, users } = req.body;

	const newProject = new Project({
		name,
		description,
		image,
		link,
		tags,
		type,
		users,
	});

	newProject
		.save()
		.then(() => res.json("Project added!"))
		.catch((err) => res.status(400).json("Error: " + err));
});

// GET endpoint for getting all projects
router.get("/", (req, res) => {
	Project.find()
		.then((projects) => res.json(projects))
		.catch((err) => res.status(400).json("Error: " + err));
});

// GET endpoint for getting a single project
router.get("/:id", (req, res) => {
	Project.findById(req.params.id)
		.then((project) => res.json(project))
		.catch((err) => res.status(400).json("Error: " + err));
});

// patch endpoint for updating a single project
router.patch("/update/:id", (req, res) => {
	const updates = req.body;
	Project.findByIdAndUpdate(req.params.id, updates, { new: true })
		.then((project) => {
			if (project) {
				res.json("Project updated!");
			} else {
				res.status(404).json("Project not found");
			}
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
