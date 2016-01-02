var AppDispatcher = require('../dispatcher/AppDispatcher')
    NotifierConstants = require('../constants/NotifierConstants');

module.exports = {

  // Receive inital product data
  receiveNotifications: function(data) {
    AppDispatcher.handleAction({
      actionType: NotifierConstants.RECEIVE_DATA,
      data: data
    })
  }
};
