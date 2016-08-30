var _ = require('lodash'),
    express = require('express'),
    bodyParser = require('body-parser'),
    HttpError = require('http-errors'),
    Notification = require('../models/Notification');

var router = module.exports = express.Router();

router.use(bodyParser.json());

router.route('/notifications')
    .get(function(req, res) {
        Notification.find(function(err, notifications){
            res.json({
                data: notifications
            });
        });
    })
    .post(function(req, res) {
        var first = new Notification({title: "hello"});
        first.save(function (err, first) {
            if (err) return console.error(err);
            res.json({
                data: first
            })
        });
    });
