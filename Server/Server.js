const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");
const mailRoute = require("./Routes/MailRoute");

app.use(express.json());

// routes
app.use(cors(
    {
        origin: "https://app.netlify.com/sites/vermillion-yeot-ae1436/deploys/64b05dc20c3c5e3ee207422f",
    }

));
app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.use("/api", mailRoute);

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
