import React from 'react';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import NotifierStore from '../stores/NotifierStore';
import NotificationList from './NotificationList.react';
import AddNotificationButton from './AddNotificationButton.react';
import NewNotification from './NewNotifications/NewNotification.react';

class Notification {
    constructor(name, origin, destination, arrivalTime) {
        this.name = name;
        this.origin = origin;
        this.destination = destination;
        this.arrivalTime = arrivalTime;
    }
}

// Define main Controller View
var NotifierApp = React.createClass({

    // Get initial state from stores
    getInitialState: function() {
        return { 
            notifications: NotifierStore.getNotifications(),
            name: "",
            arrivalTime: undefined,
            origin: undefined,
            destination: undefined,
            showModal: false
        };
    },

    //Mixins for easy linking
    mixins: [LinkedStateMixin],

    // Add change listeners to stores
    componentDidMount: function() {
    },

    // Remove change listeners from stores
    componentWillUnmount: function() {
    },

    toggleNewNotification: function() {
        this.setState({showModal: !this.state.showModal});
    },

    updateTime: function(newTime) {
        this.setState({arrivalTime: newTime});
    },

    // Render our child components, passing state via props
    render: function() {
        var Modal;
        if (this.state.showModal) {
            Modal = <NewNotification
                    toggleModal={this.toggleNewNotification}
                    name={this.state.name}
                    arrivalTime={this.state.arrivalTime}
                    origin={this.state.origin}
                    destination={this.state.destination}
                    updateNotification={this.linkState}
                    updateTime={this.updateTime}/>
        }

        return (
            <div className="NotifierApp container-fluid">
                <h1>Travel Time Notifier</h1>
                <NotificationList notifications={this.state.notifications}/>
                <AddNotificationButton addNotification={this.toggleNewNotification} />
                { Modal }
            </div>
        );
    },

    // Method to setState based upon Store changes
    _onChange: function() {
        this.setState(getState());
    }

});

module.exports = NotifierApp;
