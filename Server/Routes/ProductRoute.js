const express = require("express");
const router = express.Router();
const Product = require("../Models/ProductsModel");

// Create a new product
router.post("/create", async (req, res) => {
	try {
		const product = await Product.create(req.body);
		res.json("Product added!");
	} catch (err) {
		res.status(400).json("Error: " + err);
	}
});

// Get all products
router.get("/", async (req, res) => {
	try {
		const products = await Product.find();
		res.json(products);
	} catch (err) {
		res.status(400).json("Error: " + err);
	}
});

// Get a single product
router.get("/:id", async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		res.json(product);
	} catch (err) {
		res.status(400).json("Error: " + err);
	}
});

// Update a product
router.patch("/update/:id", async (req, res) => {
	try {
		const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (product) {
			res.json("Product updated!");
		} else {
			res.status(404).json("Product not found");
		}
	} catch (err) {
		res.status(400).json("Error: " + err);
	}
});

module.exports = router;
