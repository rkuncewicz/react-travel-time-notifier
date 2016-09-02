import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import DirectionConstants from '../constants/DirectionConstants';
import _ from 'lodash';

var _directions = [];

// Method to load product data from mock API
function loadProductData(data) {
    _directions = data;
}

// Extend ProductStore with EventEmitter to add eventing capabilities
var DirectionStore = _.extend({}, EventEmitter.prototype, {

    // Return Product data
    getDirections: function() {
        return _directions;
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
        case DirectionConstants.RECEIVE_DATA:
            loadProductData(action.data);
            break;
        default:
            return true;
    }

    // If action was responded to, emit change event
    DirectionStore.emitChange();

    return true;

});

module.exports = DirectionStore;
