const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");
const mailRoute = require("./Routes/MailRoute");
const projectRoute = require("./Routes/ProjectRoute");
const blogsRoute = require("./Routes/BlogsRoute");
const productRoute = require("./Routes/ProductRoute");

app.use(express.json());

// routes
app.use(
	cors({
		origin: [
			"https://quaint.kitchen360.co.ke",
			"https://quaint.kitchen360.co.ke/",
			"http://localhost:5173",
		],
	})
);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

// connect to MongoDB using promises
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("MongoDB connected");
		// routes
		app.use("/api", mailRoute);
		app.use("/api/projects", projectRoute);
		app.use("/api/blogs", blogsRoute);
		app.use("/api/products", productRoute);
	})
	.catch((err) => console.log(err));

// Export the app for server.js
module.exports = app;
