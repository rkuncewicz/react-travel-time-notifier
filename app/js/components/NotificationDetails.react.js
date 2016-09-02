import React from 'react';

// Define main Controller View
var NotificationDetails = React.createClass({

    // Add change listeners to stores
    componentDidMount: function() {
    },

    // Remove change listeners from stores
    componentWillUnmount: function() {
    },

    // Render our child components, passing state via props
    render: function() {
        return (
            <div className="NotificationDetails">
                <div>
                    <span> Origin: {this.props.origin}</span>
                </div>
                <div>
                    <span> Destination: {this.props.destination}</span>
                </div>
                <div>
                    <span>Arrive by: {this.props.arriveBy}</span>
                </div>
                <div>
                    <span>Leave by: {this.props.leaveBy}</span>
                </div>
            </div>
        );
    },

});

module.exports = NotificationDetails;
