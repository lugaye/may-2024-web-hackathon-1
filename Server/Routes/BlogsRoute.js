const express = require("express");
const router = express.Router();
const Blog = require("../Models/BlogsModel");

// POST endpoint for creating a new blog
router.post("/create", (req, res) => {
	const { name, description, image, tags, likes, reads, link, starred } =
		req.body;

	const newBlog = new Blog({
		name,
		description,
		image,
		tags,
		likes,
		reads,
		link,
		starred,
	});

	newBlog
		.save()
		.then(() => res.json("Blog added!"))
		.catch((err) => res.status(400).json("Error: " + err));
});

// GET endpoint for getting all blogs
router.get("/", (req, res) => {
	Blog.find()
		.then((blogs) => res.json(blogs))
		.catch((err) => res.status(400).json("Error: " + err));
});

// GET endpoint for getting a single blog
router.get("/:id", (req, res) => {
	Blog.findById(req.params.id)
		.then((blog) => res.json(blog))
		.catch((err) => res.status(400).json("Error: " + err));
});

// patch endpoint for updating a single blog
router.patch("/update/:id", (req, res) => {
	const updates = req.body;
	Blog.findByIdAndUpdate(req.params.id, updates, { new: true })
		.then((blog) => {
			if (blog) {
				res.json("Blog updated!");
			} else {
				res.status(404).json("Blog not found");
			}
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
