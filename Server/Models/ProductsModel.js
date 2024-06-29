const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create a schema for the product
const productSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			minlength: 3,
		},
		description: {
			type: String,
			required: true,
			trim: true,
			minlength: 3,
		},
		image: {
			type: String,
			required: true,
			trim: true,
			minlength: 3,
		},
		link: {
			type: String,
			required: true,
			trim: true,
			minlength: 3,
		},

		tags: {
			type: Array,
			required: true,
			trim: true,
			minlength: 3,
		},
		stars: {
			type: Number,
			required: true,
			trim: true,
			minlength: 3,
		},
		price: {
			type: Number,
			required: true,
			trim: true,
			minlength: 3,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Product", productSchema);
