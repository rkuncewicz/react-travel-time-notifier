var Bluebird = require('bluebird');
[
//Models
'Notification'
].forEach(function(modelName) {
	var model = require('./' + modelName);

	Bluebird.promisifyAll(model);

	module.exports[modelName] = model;
});
