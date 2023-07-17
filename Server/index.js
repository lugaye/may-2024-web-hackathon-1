const express = require("express");
const app = express();
require("dotenv").config();
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
const MONGO_URI =
	"mongodb+srv://OptiSoft:PHAyTp3oLZoNlINf@optisoft.97dvunu.mongodb.net/OptiSoft?retryWrites=true&w=majority";
mongoose
	.connect(MONGO_URI, {
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

		// start the server
		const server = app.listen(process.env.PORT || 5000, () => {
			console.log(`Listening on port ${server.address().port}`);
		});

		// Export the server instance
		module.exports = server;
	})
	.catch((err) => console.log(err));
