var React = require('react'),
    NotifierStore = require('../stores/NotifierStore'),
    NotificationList = require('./NotificationList.react'),
    AddNotification = require('./AddNotification.react');

// Method to retrieve state from Stores
function getState() {
    return {
        notifications: NotifierStore.getNotifications()
    };
}

// Define main Controller View
var NotifierApp = React.createClass({

    // Get initial state from stores
    getInitialState: function() {
        var blah = getState();
        console.log(blah);
        return blah;
    },

    // Add change listeners to stores
    componentDidMount: function() {
    },

    // Remove change listeners from stores
    componentWillUnmount: function() {
    },

    // Render our child components, passing state via props
    render: function() {
        return (
            <div className="NotifierApp">
                <h1>Travel Time Notifier</h1>
                <NotificationList notifications={this.state.notifications} />
                <AddNotification />
            </div>
        );
    },

    // Method to setState based upon Store changes
    _onChange: function() {
        this.setState(getState());
    }

});

module.exports = NotifierApp;
