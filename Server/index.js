const app = require("./server");
const port = process.env.PORT || 5000;
// start the server
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
