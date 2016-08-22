var ReactDom = require('react-dom'),
    React = require('react'),
	NotifierApp = require('./components/NotifierApp.react'),
    ProductData = require('./ProductData')
    NotificationApi = require('./utils/NotificationApi');
require('bootstrap-webpack');
require('../less/index.less');

ProductData.init();
NotificationApi.getNotificationData();

// Render Controller View
ReactDom.render(
	<NotifierApp />,
	document.getElementById('travel-time-notifier')
);
