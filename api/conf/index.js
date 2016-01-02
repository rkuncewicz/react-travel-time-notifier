var rc = require('rc');

var conf = rc('projectNameHere', {
	url: 'http://localhost:8088/api',
	port: process.env.NODE_ENV === 'production' ? 80 : 8088,
	environment: 'default',
	using_https: false,
});

module.exports = conf;
