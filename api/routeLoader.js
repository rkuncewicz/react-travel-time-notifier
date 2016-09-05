var _ = require('lodash'),
	conf = require('./conf'),
	koaRouter = require('koa-router');

function loadRoutes(router) {
	router.get('/api', function *(next) {
		this.body = {message: 'welcome to the api!'};
	});

	_.each(apiResources, function(resource) {
		var childRouter = new koaRouter({ prefix: '/api/' + resource });
		var r = require('./routes/' + resource)(childRouter);
		router.use(childRouter.routes(), childRouter.allowedMethods());
	});

	return router;
}

var apiResources = [
	'Notifications',
	'Directions'
];

module.exports = loadRoutes(new koaRouter());
