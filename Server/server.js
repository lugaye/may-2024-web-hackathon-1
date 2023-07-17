const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");
const mongoose = require("mongoose");

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));

// Connect to MongoDB
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("MongoDB connection established");
		// routes
		app.use("/api", require("./Routes/MailRoute.js"));
		app.use("/api/projects", require("./Routes/ProjectRoute.js"));
		app.use("/api/blogs", require("./Routes/BlogsRoute.js"));
		app.use("/api/products", require("./Routes/ProductRoute.js"));

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

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("500: Internal Server Error");
});

// Error handling for routes
app.use("/api", (err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ error: "Internal Server Error" });
});

app.use("/api/projects", (err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ error: "Internal Server Error" });
});

app.use("/api/blogs", (err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ error: "Internal Server Error" });
});

app.use("/api/products", (err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ error: "Internal Server Error" });
});

module.exports = app;
