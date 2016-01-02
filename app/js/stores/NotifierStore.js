var AppDispatcher = require('../dispatcher/AppDispatcher'),
    EventEmitter = require('events').EventEmitter,
    NotifierConstants = require('../constants/NotifierConstants');
    _ = require('lodash');

var _notifications = {};

// Method to load product data from mock API
function loadProductData(data) {
    _notifications = data;
}

// Extend ProductStore with EventEmitter to add eventing capabilities
var ProductStore = _.extend({}, EventEmitter.prototype, {

    // Return Product data
    getNotifications: function() {
        return _notifications;
    },

    // Emit Change event
    emitChange: function() {
        this.emit('change');
    },

    // Add change listener
    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    // Remove change listener
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
    var action = payload.action;
    var text;

    switch(action.actionType) {
        case NotifierConstants.RECEIVE_DATA:
            loadProductData(action.data);
            break;
        default:
            return true;
    }

    // If action was responded to, emit change event
    ProductStore.emitChange();

    return true;

});

module.exports = ProductStore;
