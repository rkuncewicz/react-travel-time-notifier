import React from 'react';
import { Button, Input } from 'react-bootstrap';
import GoogleMap from '../GoogleMap.react';
import DateTimeField from 'react-bootstrap-datetimepicker';


// Define main Controller View
var GetLocations = React.createClass({
    getInitialState: function() {
        return { 
            apiLoaded: false
        };
    },
    // Add change listeners to stores
    componentDidMount: function() { 
    },

    getAddress: function(event) {
        if (!this.state.apiLoaded) {
            this.state.origin = new google.maps.places.Autocomplete(
                (this.refs.origin.refs.input), {types: ['geocode']});
            this.state.destination = new google.maps.places.Autocomplete(
                (this.refs.destination.refs.input), {types: ['geocode']});

            this.state.apiLoaded = true;
        }
    },

    calculateRoute: function() {
        if (this.state.origin !== undefined && this.state.destination !== undefined) {
            var originPlace = this.state.origin.getPlace();
            var destinationPlace = this.state.destination.getPlace();
            this.setState(
                {
                    originPlace: originPlace,
                    destinationPlace: destinationPlace
                }
            );
            this.refs.map.calculateRoute(originPlace, destinationPlace);
        }
    },

    // Render our child components, passing state via props
    render: function() {
        var self = this;
        return (
            <div>
                <Input
                    ref="origin" 
                    type="text" 
                    label="Origin" 
                    placeholder="Enter in starting address.." 
                    onChange={this.getAddress}
                    onMouseOut={this.calculateRoute}
                    onBlur={this.calculateRoute} />
                <Input
                    ref="destination" 
                    type="text" 
                    label="Destination" 
                    placeholder="Enter in destination address.." 
                    onChange={this.getAddress} 
                    onMouseOut={this.calculateRoute}
                    onBlur={this.calculateRoute} />
                <GoogleMap 
                    ref="map"
                    origin={self.state.origin}
                    destination={self.state.destination} />
            </div>
        );
    },

});

module.exports = GetLocations;
