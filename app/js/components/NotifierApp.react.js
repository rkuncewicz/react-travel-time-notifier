var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    NotifierStore = require('../stores/NotifierStore'),
    NotificationList = require('./NotificationList.react'),
    AddNotificationButton = require('./AddNotificationButton.react'),
    NewNotification = require('./NewNotification.react');

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
        return (
            <div className="NotifierApp container-fluid">
                <h1>Travel Time Notifier</h1>
                <NotificationList notifications={this.state.notifications}/>
                <AddNotificationButton addNotification={this.toggleNewNotification} />
                <NewNotification 
                    show={this.state.showModal} 
                    toggleModal={this.toggleNewNotification}
                    name={this.state.name}
                    arrivalTime={this.state.arrivalTime}
                    origin={this.state.origin}
                    destination={this.state.destination}
                    updateNotification={this.linkState}
                    updateTime={this.updateTime}/>
            </div>
        );
    },

    // Method to setState based upon Store changes
    _onChange: function() {
        this.setState(getState());
    }

});

module.exports = NotifierApp;
