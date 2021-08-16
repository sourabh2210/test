const express = require("express");
const conn = require("./connection");
const app = express();
const router = require("./router/route");
const logger = require("./logger");

app.use(express.json());
app.use("/", router);

app.listen(4000, () => {
	logger.info("Server Started...");
});
