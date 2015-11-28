var person = require('../../app/controller/person.server.controller');

module.exports = function(app) {
	app.route('/person')
		.get(person.list)
		.post(person.create);

	app.route('/person/:personId')
		.get(person.read)
		.put(person.update)
		.delete(person.delete);

	app.param('personId', person.personById);
};