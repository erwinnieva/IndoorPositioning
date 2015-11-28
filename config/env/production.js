module.exports = {
	// Development configuration options

	// To connect to MongoDB, you will need to use MongoDB connection URI.  The MongoDB connection URI is a string URL that tells the MongoDB
	// drivers how to connect to the database instance.  The MongoDB URI is usually constructed as follows:
	//	mongodb://username:password@hostname:port/database
	// Since you are connecting local instance, you can skip the username and password and use the following URI:
	//	mongodb://localhost/database_name

	// Use the below code to connect to local mongoDB
	// db: 'mongodb://localhost/capstone'

	// Use the below code to connect to the production mongodb
	// db: 'mongodb://capstone:capstone@ds053164.mongolab.com:53164/heroku_qx59z08p'
	// db: 'mongodb://capstone:capstone@ds053164.mongolab.com:53164/heroku_qx59z08p'
	// db: 'mongodb://capstone:capstone@ds053164.mongolab.com:53164/heroku_qx59z08p'
	db: 'mongodb://capstone:capstone@ds053164.mongolab.com:53164/heroku_qx59z08p'

	// Testing
};