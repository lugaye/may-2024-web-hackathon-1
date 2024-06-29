const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create a schema for the blog
const blogSchema = new Schema(
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
		starred: {
			type: Boolean,
			required: true,
			trim: true,
			minlength: 3,
		},
		reads: {
			type: Number,
			required: true,
			trim: true,
			minlength: 3,
		},
		likes: {
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

module.exports = mongoose.model("Blog", blogSchema);
