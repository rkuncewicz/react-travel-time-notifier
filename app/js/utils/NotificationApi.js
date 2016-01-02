var NotificationActions = require('../actions/NotificationActions');

module.exports = {

  // Load mock product data from localStorage into ProductStore via Action
    getProductData: function() {
        var data = JSON.parse(localStorage.getItem('notifications'));
        NotificationActions.receiveNotifications(data);
    }

};
