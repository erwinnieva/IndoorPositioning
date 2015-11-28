// In the main application file, you connected all the loose ends by requiring the Express configuration module and the using it
// to retrieve your application object instance, and listen to port 3000

// Process environment variable will be set to 'development' by default if it doesn't exist.  This is because, often, the NODE_ENV
// environment  variable is not properly set
// NOTE: It is recommended that you set the NODE_ENV environment variable in your operating system prior to running your application
// In windows environment, this can be done by executing the following command in your command prompt: > set NODE_ENV = development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var mongoose = require('./config/mongoose'),
	express = require('./config/express');
var db = mongoose()
var app = express();
// Use this during development to use port 3000
app.listen(3000);
// app.set('port', (process.env.PORT || 3000));

// Use this in production to listen to port 80
// app.set('port', (process.env.PORT || 80));
// app.listen(app.get('port'), function() {
// 	console.log('Server running on port ', app.get('port'));
// });