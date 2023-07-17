const express = require("express");
const router = express.Router();
const Blog = require("../Models/BlogsModel");

// Create a new blog
router.post("/create", async (req, res) => {
	try {
		const blog = await Blog.create(req.body);
		res.json("Blog added!");
	} catch (err) {
		res.status(400).json("Error: " + err);
	}
});

// Get all blogs
router.get("/", async (req, res) => {
	try {
		const blogs = await Blog.find();
		res.json(blogs);
	} catch (err) {
		res.status(400).json("Error: " + err);
	}
});

// Get a single blog
router.get("/:id", async (req, res) => {
	try {
		const blog = await Blog.findById(req.params.id);
		res.json(blog);
	} catch (err) {
		res.status(400).json("Error: " + err);
	}
});

// Update a blog
router.patch("/update/:id", async (req, res) => {
	try {
		const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (blog) {
			res.json("Blog updated!");
		} else {
			res.status(404).json("Blog not found");
		}
	} catch (err) {
		res.status(400).json("Error: " + err);
	}
});

module.exports = router;
