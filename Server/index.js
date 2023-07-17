// index.js
const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

module.exports = app;
