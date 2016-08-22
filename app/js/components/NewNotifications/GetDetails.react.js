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
    console.log(directions);
    if (directions.routes === undefined) return {};
    return {
        duration: directions.routes[0].legs[0].duration.text,
        durationTraffic: directions.routes[0].legs[0]['duration_in_traffic'].text
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
    

    updateTime: function () {
        //console.log(this.refs.dateTime);
        var origin = "Oakville, ON";
        var destination = "Toronto, ON";
        console.log(MapsApi);
        MapsApi.getDirections(origin, destination);
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
        var blee = getAppState();
        console.log("blee");
        console.log(blee);
        this.setState(blee);
        console.log('bloo');
    }
});

module.exports = GetDetails;
