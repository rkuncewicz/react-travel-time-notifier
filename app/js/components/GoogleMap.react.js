import React from 'react';

// Define main Controller View
var NewNotification = React.createClass({
    getInitialState: function() {
        return {};
    },
    // Add change listeners to stores
    componentDidMount: function() {
        this.state.directionsService = new google.maps.DirectionsService;
        this.state.directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(this.refs.map, {
          zoom: 7,
          center: {lat: 41.85, lng: -87.65}
        });
        this.state.directionsDisplay.setMap(map);       
    },

    // Remove change listeners from stores
    componentWillUnmount: function() {
    },

    calculateRoute: function(origin, destination) {
        var self = this;

        if (origin && destination) {
            this.state.directionsService.route({
                origin: origin,
                destination: destination,
                travelMode: 'DRIVING'
            }, function(resp, status) {
                if (status === 'OK') {
                    self.state.directionsDisplay.setDirections(resp);
                } else {
                    console.log("Error: " + status);
                    console.log(resp);
                }
            })
        }
    },

    // Render our child components, passing state via props
    render: function() {
        var self = this;
        return (
            <div ref='map' className='GoogleMap'>
            </div>
        );
    },

});

module.exports = NewNotification;
