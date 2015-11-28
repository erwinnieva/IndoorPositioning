// Used CommonJS module to support single module function
// Required the index.server.controller controller and used its render method as a middleware to GET requests from the root path
module.exports = function(app) {
	var index = require('../controller/index.server.controller');
	app.get('/', index.render);
}