// index.js
const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");
const mailRoute = require("./Routes/MailRoute");

app.use(express.json());

// routes
app.use(
	cors({
		origin: ["https://quaint.kitchen360.co.ke", "http://localhost:5173"],
	})
);

// connect to MongoDB using promises
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("MongoDB connected");
		app.get("/", (req, res) => {
			res.send("Hello World!");
		});
		// routes
		app.use("/api", mailRoute);

		// start the server
		app.listen(port, () => {
			console.log(`Listening on port ${port}`);
		});
	})
	.catch((err) => {
		console.log("Error connecting to MongoDB:");
		console.error(err);
	});

module.exports = app;
