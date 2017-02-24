"use strict";
var express = require("express"),
    path = require("path"),
    app = express(),
    pg = require("pg");

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

//console.log(path.join(__dirname, '../front-end/index.html'))
//app.use(express.static(path.join(__dirname, '/index.html')));

app.get('/db', function (request, response) {
    response.send("AYAYAYAY");
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
//    client.query('SELECT * FROM test_table', function(err, result) {
//      done();
//      if (err)
//       { console.error(err); response.send("Error " + err); }
//      else
//       { response.render('pages/db', {results: result.rows} ); }
//    });
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