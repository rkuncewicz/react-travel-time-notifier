var React = require('react'),
    ReactBootstrap = require('react-bootstrap'),
    Button = ReactBootstrap.Button,
    Input = ReactBootstrap.Input,
    GoogleMap = require('../GoogleMap.react'),
    DateTimeField = require('react-bootstrap-datetimepicker'),
    MapsApi = require('../../utils/MapsApi'),
    DirectionStore = require('../../stores/DirectionStore');

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
        var origin = this.props.origin.geometry.location;
        var destination = this.props.destination.geometry.location;
        var originLatLng = origin.lat() +","+ origin.lng();
        var destinationLatLng = destination.lat() +","+ destination.lng();

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
                        <div>{this.state.duration}</div>
                        <div>{this.state.durationTraffic}</div>
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
