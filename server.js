'use strict';

var express = require('express');
var app = express();
var validator = require('./validator.js');

app.use(express.static('client'));

app.post('/exam/', function(req, res) {
   var validator = validator(req.body.feedback, req.body.scale, req.body.email);
});

app.listen(3000, function () {
   console.log('SERVER IS UP AND RUNNING on port: 3000');
});
