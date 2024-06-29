require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// set up server
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors({ origin: "*" }));

// connect to MongoDB using promises
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("MongoDB connection established");
		// set up routes after the database connection is established
		app.get("/", (req, res) => res.send("API running"));
		app.use("/api", require("./Routes/MailRoute"));
		app.use("/api/projects", require("./Routes/ProjectRoute"));
		app.use("/api/blogs", require("./Routes/BlogsRoute"));
		app.use("/api/products", require("./Routes/ProductRoute"));

		// start the server
		app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
	})
	.catch((err) => {
		console.error("MongoDB connection error:", err);
	});
