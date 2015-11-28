var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// Define Location Schema
// LocX		: Contains the x location in a 2D map
// LocY 	: Contains the y location in a 2D map
// _person 	: Contains the _id of the Person table
var LocationSchema = new Schema({
	LocX: Number,
	LocY: Number,
	_person: {
		type: Schema.ObjectId,
		ref: 'Person'
	}
});

// Define Person Schema
// Firstname 		: Contains the person's firstname
// Lastname 		: Contains the person's lastname
// MobileNumber 	: Contains the person's mobile number
// MobileUniqueID	: Contains the person's android unique number
// ReferenceNumber	: Contains a mobile number to be used to send SMS messaging
var PersonSchema = new Schema({
	Firstname: 			String,
	Lastname: 			String,
	MobileNumber: 		String,
	MobileUniqueID: 	String,
	ReferenceNumber: 	String
});

// Define Company Schema
// Name			: Contains the name of the company
// Description	: Contains the type of the company
// PhoneNumber	: Contains the company's contact number
var CompanySchema = new Schema({
	Name: 			String,
	Description: 	String,
	PhoneNumber: 	String
});

// Define Point of Interest Schema
// Name 	: Contains the name of the item/object
// Category : Contains what category the identified point of interest belongs to
// LocX 	: Contains the point of interest x location on the map
// LocY 	: Contains the point of interest y location on the map
// _company : Contains the _id of the company linked to this record
var POISchema = new Schema({
	Name: String,
	Category: String,
	LocX: Number,
	LocY: Number,
	_company: {
		type: Schema.ObjectId,
		ref: 'Company'
	}
});

// Create the models
mongoose.model('POI', POISchema);
mongoose.model('Person', PersonSchema);
mongoose.model('Company', CompanySchema);
mongoose.model('Location', LocationSchema);