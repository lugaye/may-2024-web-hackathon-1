const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create a schema for the project
const projectSchema = new Schema(
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
		type: {
			type: String,
			required: true,
			trim: true,
			minlength: 3,
		},
		users: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Project", projectSchema);
