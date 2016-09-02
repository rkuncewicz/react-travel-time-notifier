import AppDispatcher from '../dispatcher/AppDispatcher';
import NotifierConstants from '../constants/NotifierConstants';

module.exports = {

  // Receive inital product data
  receiveNotifications: function(data) {
    AppDispatcher.handleAction({
      actionType: NotifierConstants.RECEIVE_DATA,
      data: data
    })
  }
};
