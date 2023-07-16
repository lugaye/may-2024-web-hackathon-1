const express = require("express");
const router = express.Router();
const Product = require("../Models/ProductsModel");

// POST endpoint for creating a new product
router.post("/create", (req, res) => {
	const { name, description, image, link, tags, stars,price} = req.body;

	const newProduct = new Product({
		name,
		description,
		image,
		link,
		tags,
		stars,
		price,
	});

	newProduct
		.save()
		.then(() => res.json("Product added!"))
		.catch((err) => res.status(400).json("Error: " + err));
});

// GET endpoint for getting all products
router.get("/", (req, res) => {
	Product.find()
		.then((products) => res.json(products))
		.catch((err) => res.status(400).json("Error: " + err));
});

// GET endpoint for getting a single product
router.get("/:id", (req, res) => {
	Product.findById(req.params.id)
		.then((product) => res.json(product))
		.catch((err) => res.status(400).json("Error: " + err));
});

// patch endpoint for updating a single product
router.patch("/update/:id", (req, res) => {
	const updates = req.body;
	Product.findByIdAndUpdate(req.params.id, updates, { new: true })
		.then((product) => {
			if (product) {
				res.json("Product updated!");
			} else {
				res.status(404).json("Product not found");
			}
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
