"use strict";
var express = require("express"),
    path = require("path"),
    app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

//console.log(path.join(__dirname, '../front-end/index.html'))
//app.use(express.static(path.join(__dirname, '/index.html')));

app.listen(3000, function() {
    console.log(path.join(__dirname, '/index.html'))
    console.log('Example app listening on port 3000!');
});
