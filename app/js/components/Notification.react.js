import React from 'react';
import NotificationHeader from './NotificationHeader.react';
import NotificationDetails from './NotificationDetails.react';

// Define main Controller View
var Notification = React.createClass({

    // Add change listeners to stores
    componentDidMount: function() {
    },

    // Remove change listeners from stores
    componentWillUnmount: function() {
    },

    // Render our child components, passing state via props
    render: function() {
        var self = this, notification = this.props.notification;
        return (
            <div className="Notification">
                <NotificationHeader name={notification.name}/>
                <NotificationDetails 
                    destination={notification.destination} 
                    arriveBy={notification.arriveBy}
                    origin={notification.origin}
                    leaveBy={notification.leaveBy} />
            </div>
        );
    },

});

module.exports = Notification;
