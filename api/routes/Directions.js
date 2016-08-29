var _ = require('lodash'),
    express = require('express'),
    bodyParser = require('body-parser'),
    request = require('superagent'),
    HttpError = require('http-errors');

var router = module.exports = express.Router();

router.use(bodyParser.json());

router.route('/directions')
    .get(function(req, res) {
        var topRes = res;
        var origin = req.query.originLatLng;
        var destination = req.query.destinationLatLng;
        var arrivalTime = req.query.arrivalTime;

        request
            .get('https://maps.googleapis.com/maps/api/directions/json')
            .query({ 
                origin: origin, 
                destination: destination, 
                key: key
            })
            .end(function(err, res) {
                if (err) {
                    console.log(err);
                    return err;
                }
                var directions = JSON.parse(res.text);
                var leg = directions.routes[0].legs[0];
                var departureTime = arrivalTime - leg.duration.value;

                return request
                    .get('https://maps.googleapis.com/maps/api/directions/json')
                    .query({ 
                        origin: origin, 
                        destination: destination, 
                        key: key, 
                        departure_time: departureTime})
                    .end(function(err, res) {
                        var directions = JSON.parse(res.text);
                        var leg = directions.routes[0].legs[0];
                        topRes.json({
                            data: {
                                duration: leg.duration ? leg.duration.text : "",
                                durationInTraffic: 
                                    leg['duration_in_traffic'] 
                                        ? leg['duration_in_traffic'].text 
                                        : ""
                            }
                        }); 
                    });
            })
    })
    .post();
