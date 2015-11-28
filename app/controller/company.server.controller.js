var mongoose = require('mongoose'),
	Company = mongoose.model('Company');

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

exports.create = function(req, res) {
	var company = new Company(req.body);
	company.save(function(err) {
		if(err) {
			return next(err);
		}
		else {
			res.json(company);
		}
	});
};

exports.list = function(req, res, next) {
	Company.find({}, function(err, company) {
		if(err) {
			return next(err);
		}
		else {
			res.json(company);
		}
	});
};

// Retrieving a single user document is done using the findOne() method which is very similar to the find() method, but retrieves only the
// first document of the subset

// The read method is just responding with JSON representation of the req.boothdetail object
exports.read = function(req, res) {
	res.json(req.company);
};

// boothdetailByID method is responsible for populating the req.boothdetail object.  You will use the boothdetailByID method as a middleware
// to deal with the manipulation of single documents when performing read, delete, and update operations
exports.companyById = function(req, res, next, id) {
	Company.findOne({
		_id: id
	}, function(err, company) {
		if(err) {
			return next(err);
		}
		else {
			req.company = company;
			next();
		}
	});
};

exports.update = function(req, res, next) {
	Company.findByIdAndUpdate(req.company.id, req.body, function(err, company) {
		if(err) {
			return next(err);
		}
		else {
			res.json(company);
		}
	});
};

exports.delete = function(req, res, next) {
	req.company.remove(function(err) {
		if(err) {
			return next(err);
		}
		else {
			res.json(req.company);
		}
	});
};