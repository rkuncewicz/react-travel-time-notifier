var _ = require('lodash'),
    express = require('express'),
    bodyParser = require('body-parser'),
    HttpError = require('http-errors');

var router = module.exports = express.Router();

router.use(bodyParser.json());

router.route('/notifications')
    .get(function(req, res) {
        res.json({
            data: []
        });
    })
    .post();
