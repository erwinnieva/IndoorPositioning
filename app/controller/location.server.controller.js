var mongoose = require('mongoose'),
	Location = mongoose.model('Location');

// The getErrorMessage() method gets the Mongoose error object passed as an argument then iterates over the errors collection and extract the
// first message.  This is done because you don't want to overwhelm your users with multiple error messages at once
var getErrorMessage = function(err) {
	if(err.errors) {
		for(var errName in err.errors) {
			if(err.errors[errName].message) return err.errors[errName].message;
		}
	}
	else {
		return 'Unknown server error';
	}
};

// NOTE: When creating a new product using poster, make sure you include the following:
// URL: http://localhost:3000 => specific Booth Id
// {"_company" : "5632618a1dc4df481bd97300"} => specific Company Id
exports.create = function(req, res) {
	var location = new Location(req.body);
	location.save(function(err) {
		if(err) {
			return next(err);
		}
		else {
			res.json(location);
		}
	});
};

exports.list = function(req, res, next) {
	Location.find({}, function(err, location) {
		if(err) {
			return next(err);
		}
		else {
			res.json(location);
		}
	});
};

// Retrieving a single user document is done using the findOne() method which is very similar to the find() method, but retrieves only the
// first document of the subset

// The read method is just responding with JSON representation of the req.boothdetail object
exports.read = function(req, res) {
	res.json(req.location);
};

exports.locationById = function(req, res, next, id) {
	Location.findOne({
		_id: id
	}, function(err, location) {
		if(err) {
			return next(err);
		}
		else {
			req.location = location;
			next();
		}
	});
};

exports.update = function(req, res, next) {
	Location.findByIdAndUpdate(req.location.id, req.body, function(err, location) {
		if(err) {
			return next(err);
		}
		else {
			res.json(location);
		}
	});
};

exports.delete = function(req, res, next) {
	req.location.remove(function(err) {
		if(err) {
			return next(err);
		}
		else {
			res.json(req.location);
		}
	});
};