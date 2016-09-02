import AppDispatcher from '../dispatcher/AppDispatcher';
import DirectionConstants from '../constants/DirectionConstants';

module.exports = {

  // Receive inital product data
  receiveDirections: function(data) {
    AppDispatcher.handleAction({
      actionType: DirectionConstants.RECEIVE_DATA,
      data: data
    })
  }
};
