var ReactDom = require('react-dom'),
    React = require('react'),
	NotifierApp = require('./components/NotifierApp.react'),
    ProductData = require('./ProductData')
    NotificationApi = require('./utils/NotificationApi');

ProductData.init();
NotificationApi.getProductData();

// Render Controller View
ReactDom.render(
	<NotifierApp />,
	document.getElementById('travel-time-notifier')
);
