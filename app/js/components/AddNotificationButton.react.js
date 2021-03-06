import React from 'react';

// Define main Controller View
var AddNotificationButton = React.createClass({

    // Add change listeners to stores
    componentDidMount: function() {
    },

    // Remove change listeners from stores
    componentWillUnmount: function() {
    },

    addNewNotification: function () {
        this.props.addNotification();
    },

    // Render our child components, passing state via props
    render: function() {
        return (
            <div className="AddNotificationButton">
                <button className="btn" onClick={this.addNewNotification}>
                    New Notification
                </button>
            </div>
        );
    },

});

module.exports = AddNotificationButton;
