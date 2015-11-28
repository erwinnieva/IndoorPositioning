// Required the Express module then used the CommonJS module pattern to define a module function that initializes the Express app
// First, it creates a new instance of an Express application, and then it requires your routing file and call its function passing
// passing it the application instance as an argument
// The routing file will use the application instance to create a new routing configuration and will call the controller's render()
// method.
// The module function ends by returning the application instance

// NOTE: The express.js file is where we configure our Express application.  This is where we add everything related to the Express
// configuration
var config = require('./config'),
	express = require('express'),
	morgan = require('morgan'),
	compress = require('compression'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');

module.exports = function() {
	var app = express();

	// During your application development, you will often need to configure third-party modules to run differently in various
	// environments.  For instance, when you connect to your MongoDB server, you'll probably use different connection strings in
	// your development and production environments.  Doing so in the current setting will probably cause your code to be filled
	// with endless if statements, which generally be harder to maintain.  To solve this issue, you can manage a set of environment
	// configuration files that holds these properties.  You will then be able to use the process.env.NODE_ENV environment variable
	// to determine which configuration file to load, thus keeping your code shorter and easier to maintain

	// Determine the environment and configure Express application accordingly
	if(process.env.NODE_ENV === 'development') {
		// Use express logger when in development environment but not when in production
		app.use(morgan('dev'));
	}
	else if(process.env.NODE_ENV === 'production') {
		// Compress the responses body while in production environment
		app.use(compress());
	}

	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.use(bodyParser.json());
	app.use(methodOverride());

	// Configure the Express application views folder and template engine
	app.set('views', './app/views');
	app.set('view engine', 'ejs');

	require('../app/route/poi.server.route.js')(app);
	require('../app/route/index.server.route.js')(app);
	require('../app/route/person.server.route.js')(app);
	require('../app/route/company.server.route.js')(app);
	require('../app/route/location.server.route.js')(app);

	// express.static() middleware takes one argument to determine the location of the static folder
	app.use(express.static('./public'));
	return app;
};