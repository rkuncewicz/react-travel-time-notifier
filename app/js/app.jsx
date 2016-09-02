import ReactDom from 'react-dom';
import React from 'react';
import NotifierApp from './components/NotifierApp.react';
import ProductData from './ProductData';
import NotificationApi from './utils/NotificationApi';
import 'bootstrap-webpack';
import '../less/index.less';

ProductData.init();
NotificationApi.getNotificationData();

// Render Controller View
ReactDom.render(
	<NotifierApp />,
	document.getElementById('travel-time-notifier')
);
