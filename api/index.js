var _ = require('lodash'),
	bodyParser = require('body-parser'),
	conf = require('./conf'),
	express = require('express'),
	HttpError = require('http-errors');

var router = express.Router();

router.use(bodyParser.json());

function loadResources(resources) {
	_.each(resources, function(resource) {
		var r = require('./routes/' + resource);
		router.use('/', r);
	});
}

router.get('/', function(req, res) {
	res.json({message: 'welcome to the api'});
});

var apiResources = [
	//Routes
];

loadResources(apiResources);

module.exports = router;
