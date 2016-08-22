var AppDispatcher = require('../dispatcher/AppDispatcher')
    DirectionConstants = require('../constants/DirectionConstants');

module.exports = {

  // Receive inital product data
  receiveDirections: function(data) {
    AppDispatcher.handleAction({
      actionType: DirectionConstants.RECEIVE_DATA,
      data: data
    })
  }
};
