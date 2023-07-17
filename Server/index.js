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

// Enable CORS
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

// Set up routes
app.use("/api/mail", mailRoute);
app.use("/api/projects", projectRoute); // Placeholder for project route
app.use("/api/blogs", blogsRoute); // Placeholder for blogs route
app.use("/api/products", productRoute); // Placeholder for product route

// Connect to MongoDB using promises
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("MongoDB connected");

		// Start the server
		app.listen(port, () => {
			console.log(`Listening on port ${port}`);
		});
	})
	.catch((err) => console.log(err));
