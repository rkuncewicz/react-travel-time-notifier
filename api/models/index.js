var Bluebird = require('bluebird');

[
//Models
].forEach(function(modelName) {
	var model = require('./' + modelName);

	Bluebird.promisifyAll(model);

	module.exports[modelName] = model;
});
