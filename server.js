'use strict';

var express = require('express');
var app = express();
var cors = require('cors');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var validator = require('./validator.js');
var projects = [];

var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'admin',
   database: 'secretprojects'
});

connection.connect();

var app = express();
app.use(express.static('client'));
app.use(bodyParser.json());

app.post('/exam/', function(req, res) {
   var validation = validator(req.body.feedback, req.body.scale, req.body.email);
   var response = { "status": "error", "message": "thank you" }
   if (validation) {
      connection.query('SELECT * FROM projects', function(err, rows, fields) {
         if (err) throw err;
         console.log(rows);
         

         projects.push(rows[1].project_name)
         console.log('projects', projects);
         response = { "status": "ok", "projects": projects }
         res.send(response);
      });
   } else {
      res.send(response);
   }
});

app.listen(3000, function () {
   console.log('SERVER IS UP AND RUNNING on port: 3000');
});
