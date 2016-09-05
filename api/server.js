var _ = require('lodash'),
	koa = require('koa'),
	bodyParser = require('koa-bodyparser'),
	cors = require('koa-cors'),
	conf = require('./conf'),
	BPromise = require('bluebird'),
	request = require('superagent'),
	json = require('koa-json'),
	mongoose = require('mongoose');

BPromise.onPossiblyUnhandledRejection(function(error) {
	throw error;
});

const server = new koa();

server.use(cors({
    maxAge: 0,
    credentials: true,
    methods: 'GET, HEAD, OPTIONS, PUT, POST, DELETE',
    headers: 'Origin, X-Requested-With, Content-Type, Accept'
  }));

server.use(json());
server.use(bodyParser()); 

const router = require('./routeLoader');
server.use(router.routes());
server.use(router.allowedMethods());


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
