let conn = require("../connection");

module.exports.CREATE_LEAD = (params, callback) => {
	try {
		conn.sobject("Lead").create(params, function (err, ret) {
			if (err || !ret.success) {
				return callback(err);
			}
			return callback(null, ret);
		});
	} catch (error) {
		return callback(error);
	}
};

module.exports.UPDATE_LEAD = (params, callback) => {
	try {
		conn.sobject("Lead").update(params, function (err, ret) {
			if (err || !ret.success) {
				return callback(err);
			}
			return callback(null, ret);
		});
	} catch (error) {
		return callback(error);
	}
};

module.exports.GET_LEAD = (params, callback) => {
	try {
		conn.sobject("Lead").retrieve(params.id, function (err, lead) {
			if (err) {
				return callback(err);
			}
			return callback(null, lead);
		});
	} catch (error) {
		return callback(error);
	}
};

module.exports.GET_OPPORTUNITY_ID = () => {
	try {
		conn.sobject("Lead").retrieve(params.id, function (err, lead) {
			if (err) {
				return callback(err);
			}
			if (lead.ConvertedOpportunityId == null) {
				return ;
			}
			return callback(null, lead);
		});
	} catch (error) {
		return callback(error);
	}
};
