var poi = require('../controller/poi.server.controller');

module.exports = function(app) {
	app.route('/poi')
		.get(poi.list)
		.post(poi.create);

	app.route('/poi/:poiId')
		.put(poi.update)
		.delete(poi.delete);

	app.param('poiId', poi.poiById);
}