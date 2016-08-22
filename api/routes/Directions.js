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
        console.log(req.query);
        request
            .get('https://maps.googleapis.com/maps/api/directions/json')
            .query({ 
                origin: req.query.origin, 
                destination: req.query.destination, 
                key: req.query.key, 
                departure_time: 'now'})
        .end(function(err, res) {
            if (err) {
                console.log(err);
                return err;
            }

            topRes.json({
                data: res.text
            }); 
        });
    })
    .post();
