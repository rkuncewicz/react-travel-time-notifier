var React = require('react'),
    Notification = require('./Notification.react');

// Define main Controller View
var NotificationList = React.createClass({

    // Add change listeners to stores
    componentDidMount: function() {
    },

    // Remove change listeners from stores
    componentWillUnmount: function() {
    },

    // Render our child components, passing state via props
    render: function() {
        var self = this, notifications = this.props.notifications;
        return (
            <div className="NotificationList">
                <ul>
                    {notifications.map(function(notification, index){
                        return (
                            <li key={index}>
                                <Notification notification={notification}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    },

});

module.exports = NotificationList;
