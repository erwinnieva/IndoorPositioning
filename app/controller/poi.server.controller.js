var mongoose = require('mongoose'),
	POI = mongoose.model('POI');

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

// This will search a document in the POI Collection using a specific _id and return 1 result if found
exports.poiById = function(req, res, next, id) {
	POI.findOne({
		_id: id
	}, function(err, poi) {
		if(err) return next(err);
		else {
			req.poi = poi;
			next();
		}
	});
};

// This is the CREATE in CRUD for the RESTful API
exports.create = function(req, res) {
	var poi = new POI(req.body);
	poi.save(function(err) {
		if(err) return next(err);
		else res.json(poi);
	});
};

// This is the RETRIEVE in CRUD for the RESTful API
exports.list = function(req, res, next) {
	POI.find({}, function(err, poi) {
		if(err) return next(err);
		else res.json(poi);
	});
};

// This is the UPDATE in CRUD for the RESTful API
exports.update = function(req, res, next) {
	POI.findByIdAndUpdate(req.poi.id, req.body, function(err, poi) {
		if(err) return next(err);
		else res.json(poi);
	});
};

// This is the DELETE in CRUD for the RESTful API
exports.delete = function(req, res, next) {
	req.poi.remove(function(err) {
		if(err) return next(err);
		else res.json(req.poi);
	});
};