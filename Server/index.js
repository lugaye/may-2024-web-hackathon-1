const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");
const mongoose = require("mongoose");

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));

// Routes
const mailRoute = require("./Routes/MailRoute");
const projectRoute = require("./Routes/ProjectRoute");
const blogsRoute = require("./Routes/BlogsRoute");
const productRoute = require("./Routes/ProductRoute");

app.use("/api", mailRoute);
app.use("/api/projects", projectRoute);
app.use("/api/blogs", blogsRoute);
app.use("/api/products", productRoute);

// Connect to MongoDB
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("MongoDB connection established");
		// Start the server
		app.listen(port, () => {
			console.log(`Server running on port ${port}`);
		});
	})
	.catch((err) => {
		console.error("MongoDB connection error:", err);
	});

// Home route
app.get("/", (req, res) => {
	res.send("Hello World!");
});

// Error handler
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("500: Internal Server Error");
});

module.exports = app;
