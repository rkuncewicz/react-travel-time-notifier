import React from 'react';
import { Button, Input } from 'react-bootstrap';
import GoogleMap from '../GoogleMap.react';
import DateTimeField from 'react-bootstrap-datetimepicker';
import MapsApi from '../../utils/MapsApi';
import DirectionStore from '../../stores/DirectionStore';

function getAppState() {
    var directions = DirectionStore.getDirections();
    if (directions === undefined) return {};
    return {
        duration: directions.duration,
        durationTraffic: directions.durationInTraffic
    }
}

// Define main Controller View
var GetDetails = React.createClass({
    getInitialState: function() {
        return getAppState();
    },
    // Add change listeners to stores
    componentDidMount: function() { 
        DirectionStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        DirectionStore.removeChangeListener(this._onChange);
    },
    

    updateTime: function (time) {
        var origin = this.props.origin;
        var destination = this.props.destination;
        var originLatLng = origin.lat +","+ origin.lng;
        var destinationLatLng = destination.lat +","+ destination.lng;
        this.setState({
            arrivalTime: time
        });

        MapsApi.getDirections(originLatLng, destinationLatLng, time);
    },

    // Render our child components, passing state via props
    render: function() {
        var self = this;
        return (
            <div>
                <label className="control-label">Arrive By</label>
                <div className="row">
                    <div className="col-xs-12">
                        <DateTimeField 
                            ref="dateTime"
                            mode="time" 
                            defaultText="Please select a time to arrive by.." 
                            onChange={this.updateTime}/>
                        <div>Duration: {this.state.duration}</div>
                        <div>Duration In Traffic: {this.state.durationTraffic}</div>
                    </div>
                </div>
            </div>
        );
    },

    _onChange: function() {
        this.setState(getAppState());
    }
});

module.exports = GetDetails;
