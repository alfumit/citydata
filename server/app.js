"use strict";
var express = require("express"),
    path = require("path"),
    app = express();
app.get('/', function(req, res) {
    res.sendFile('/../front-end/index.html');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
