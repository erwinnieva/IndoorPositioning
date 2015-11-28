var config = require('./config'),
	mongoose = require('mongoose');

module.exports = function() {
	var db = mongoose.connect(config.db);

	// Include the user.server.model.js file in the mongoose configuration file in order to register the models defined
	// Make sure that your Mongoose configuration file is loaded before any other configuration in the server.js file.  This is important
	// since any module that is loaded after this module will be able to use the models without loading itself
	// require('../app/models/user.server.model');
	
	// require('../app/models/conference.server.model');
	require('../app/models/capstone.server.model');
	return db;
};