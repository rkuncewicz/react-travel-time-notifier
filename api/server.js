var _ = require('lodash'),
	express = require('express'),
	conf = require('./conf'),
	BPromise = require('bluebird'),
	http = require('force-https'),
	api = require('./');

BPromise.onPossiblyUnhandledRejection(function(error) {
	throw error;
});

var server = express();

server.set('etag', 'strong');

if (conf.using_https) {
	server.enable('trust proxy');
	server.use(https);
}

server.use(function(req, res, next) {
	// set default cache-control header
	res.set({'Cache-Control': 'max-age=0, must-revalidate'});
	next();
});


server.use('/api', [
	api
]);

if (require.main === module) {
	console.log('Starting server ...');

	server.timeout = 2000;
	server.listen(conf.port, function(err) {
		if (err) {
			throw err;
		}

		console.log('Started on http://localhost:' + conf.port);
	});
}

module.exports = server;
