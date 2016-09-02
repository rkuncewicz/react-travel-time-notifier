import React from 'react';
import Notification from './Notification.react';

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
                {notifications.map(function(notification, index){
                    return (
                        <Notification key={index} notification={notification}/>
                    )
                })}
            </div>
        );
    },

});

module.exports = NotificationList;
