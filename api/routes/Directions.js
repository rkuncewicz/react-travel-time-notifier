var _ = require('lodash'),
    express = require('express'),
    bodyParser = require('body-parser'),
    request = require('superagent');

module.exports = function notifications(router) {
    router
        .get('/', function *(next) {
            var origin = this.request.query.originLatLng;
            var destination = this.request.query.destinationLatLng;
            var arrivalTime = this.request.query.arrivalTime;

            var directions = yield request
                .get('https://maps.googleapis.com/maps/api/directions/json')
                .query({ 
                    origin: origin, 
                    destination: destination, 
                    key: key
                });
            var leg = directions.body.routes[0].legs[0];
            //Double check this returns proper value
            var departureTime = arrivalTime - leg.duration.value;

            var traffic = yield request
                .get('https://maps.googleapis.com/maps/api/directions/json')
                .query({ 
                    origin: origin, 
                    destination: destination, 
                    key: key, 
                    departure_time: departureTime
                })
            
            var trafficLeg = traffic.body.routes[0].legs[0];
            this.body = {
                data: {
                    duration: trafficLeg.duration ? trafficLeg.duration.text : "",
                    durationInTraffic: 
                        trafficLeg['duration_in_traffic'] 
                            ? trafficLeg['duration_in_traffic'].text 
                            : ""
                }
            };
        });
}
