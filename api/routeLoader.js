var _ = require('lodash'),
	conf = require('./conf'),
	koaRouter = require('koa-router');

function loadRoutes(router) {
	_.each(apiResources, function(resource) {
		//console.log(require('./routes/Notifications')(koaRouter()));
		var r = require('./routes/' + resource)(koaRouter(), '/api/' + resource + '/');
		router.use(r.routes());
    	router.use(r.allowedMethods());
	});

	router.get('/api/', function *(next) {
		this.body = {message: 'welcome to the api!'};
	});

	return router;
}

var apiResources = [
	'Notifications',
	//'Directions'
];

module.exports = loadRoutes(koaRouter());
