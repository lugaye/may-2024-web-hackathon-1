// index.js
const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const mailRoute = require("./Routes/MailRoute");

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.use("/api", mailRoute);

// connect to MongoDB using promises
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("MongoDB connected");
	})
	.catch((err) => {
		console.log("Error connecting to MongoDB:");
		console.error(err);
	});

// start the server
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

module.exports = app;
