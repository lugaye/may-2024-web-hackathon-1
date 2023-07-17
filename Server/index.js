const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");
const mailRoute = require("./Routes/MailRoute");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

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
app.use("/api/projects", require("./Routes/ProjectRoute"));
app.use("/api/blogs", require("./Routes/BlogsRoute"));
app.use("/api/products", require("./Routes/ProductRoute"));

// start the server
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
