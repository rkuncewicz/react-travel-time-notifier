var _ = require('lodash'),
	express = require('express'),
	conf = require('./conf'),
	BPromise = require('bluebird'),
	http = require('force-https'),
	api = require('./'),
	request = require('superagent'),
	mongoose = require('mongoose');

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
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});


server.use('/api', [
	api
]);

if (require.main === module) {
	// Connection URL
	var url = 'mongodb://localhost:27017/travel-time-notifier';
	mongoose.connect(url);

	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
		console.log("Connection to db established)");
	});
	
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
