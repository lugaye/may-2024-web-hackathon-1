const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
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
app.use("/api", mailRoute);
app.use("/api/projects", projectRoute);
app.use("/api/blogs", blogsRoute);
app.use("/api/products", productRoute);

// Start the server
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
