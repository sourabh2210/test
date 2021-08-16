const jsforce = require("jsforce");
require("dotenv").config();
const logger = require("./logger");
const {
	SF_LOGIN_URL,
	SF_USERNAME,
	SF_PASSWORD,
	SF_TOKEN,
} = require("./config.json");

logger.info(`Connecting to salesforce...`);
logger.info({
	URL: SF_LOGIN_URL,
	USER: SF_USERNAME,
});

const conn = new jsforce.Connection({
	loginUrl: SF_LOGIN_URL,
});

conn.login(SF_USERNAME, SF_PASSWORD + SF_TOKEN, (err, userInfo) => {
	if (err) {
		logger.error("Salesforce connection error...");
		logger.error(`Error : ${JSON.stringify(err)}`);
	} else {
		logger.info("Salesforce connected...");
		logger.info({
			user_id: userInfo.id,
			organisation_id: userInfo.organizationId,
		});
	}
});

module.exports = conn;
