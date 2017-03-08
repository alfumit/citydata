"use strict";
var express = require("express"),
    path = require("path"),
    app = express(),
    pg = require("pg"),
    mongo = require("mongoose");

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../front-end/index.html'));
});

//console.log(path.join(__dirname, '../front-end/index.html'))
app.use(express.static(path.join(__dirname, '../')));


app.get('/mongodb', function (request, response) {
	console.log(process.env,process.env.MONGODB_URI || "mongodb://localhost:27017");
  mongo.connect(process.env.MONGODB_URI, function(err, db) {
  	console.log(err," Connected correctly to server ",db);
  	var test = db.collection("test");
  	console.log(test);
  	response.send(test);

  });
});

app.get('/times', function(request, response) {
    var result = '', i=0;
    var times = process.env.TIMES || 5;
    for (i=0; i < times; i++)
      result += i + ' ';
  response.send(result);
});



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});