const express = require("express");
const router = express.Router();
const logger = require("../logger");
const controller = require("../controllers/controller");

router.post("/create_lead", (req, res) => {
	let params = req.body;
	logger.info("Incoming Request : Create Lead");
	controller.CREATE_LEAD(params, (err, data) => {
		if (err) {
			logger.error("Error : Creating lead");
			logger.error(err);
			res.json({
				success: false,
				error: err,
			});
			return;
		}
		logger.info("Success : Creating lead");
		logger.info(data);
		res.json({
			success: true,
			data: data,
		});
	});
});

router.post("/update_lead", (req, res) => {
	let params = req.body;
	logger.info("Incoming Request : Update Lead");
	controller.UPDATE_LEAD(params, (err, data) => {
		if (err) {
			logger.error("Error : Updating Lead");
			logger.error(err);
			res.json({
				success: false,
				error: err,
			});
			return;
		}
		logger.info("Success Updating Lead");
		logger.info(data);
		res.json({
			success: true,
			data: data,
		});
	});
});

router.post("/get_lead", (req, res) => {
	let params = req.body;
	logger.info("Incoming Request : Retrieve Lead");
	controller.GET_LEAD(params, (err, data) => {
		if (err) {
			logger.error("Error : Retrieving Lead");
			logger.error(err);
			res.json({
				success: false,
				error: err,
			});
			return;
		}
		logger.info("Success : Retrieving Lead");
		logger.info(data);
		res.json({
			success: true,
			data: data,
		});
	});
});

router.get("/test", (req, res) => {
	let params = req.body;
	logger.info("Incoming Request : Test");
	controller.TEST((err, data) => {
		if (err) {
			logger.error("Error");
			logger.error(err);
			res.json({
				success: false,
				error: err,
			});
			return;
		}
		logger.info("Success");
		logger.info(data);
		res.json({
			success: true,
			data: data,
		});
	});
});

module.exports = router;
