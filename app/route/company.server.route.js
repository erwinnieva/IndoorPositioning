var company = require('../controller/company.server.controller');

module.exports = function(app) {
	app.route('/company')
		.get(company.list)
		.post(company.create);

	app.route('/company/:companyId')
		.get(company.read)
		.put(company.update)
		.delete(company.delete);

	app.param('companyId', company.companyById);
}