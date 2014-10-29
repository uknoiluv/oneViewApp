
var path = require('path');

var express = require('express');
var app = express();

var dataArr = require('./data.js');

app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.render('index');
});

var server = app.listen(3000, function(){
  console.log('Listening on port :', server.address().port);
});

app.get('/data', function(req, res){
  res.json(dataArr.data);
});
