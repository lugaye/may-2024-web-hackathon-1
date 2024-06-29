const express = require("express");
const router = express.Router();
const Project = require("../Models/ProjectModel");

// Create a new project
router.post("/create", async (req, res) => {
	try {
		const project = await Project.create(req.body);
		res.json("Project added!");
	} catch (err) {
		res.status(400).json("Error: " + err);
	}
});

// Get all projects
router.get("/", async (req, res) => {
	try {
		const projects = await Project.find();
		res.json(projects);
	} catch (err) {
		res.status(400).json("Error: " + err);
	}
});

// Get a single project
router.get("/:id", async (req, res) => {
	try {
		const project = await Project.findById(req.params.id);
		res.json(project);
	} catch (err) {
		res.status(400).json("Error: " + err);
	}
});

// Update a project
router.patch("/update/:id", async (req, res) => {
	try {
		const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (project) {
			res.json("Project updated!");
		} else {
			res.status(404).json("Project not found");
		}
	} catch (err) {
		res.status(400).json("Error: " + err);
	}
});

module.exports = router;
