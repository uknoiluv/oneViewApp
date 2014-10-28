
var path = require('path');

var express = require('express');
var app = express();
// var bodyParser = require('body-parser');

var dataArr = require('./data.js');

// app.use(express.static(__dirname + './public'));
app.use(express.static(__dirname));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
  res.render('index');
});

var server = app.listen(3000, function(){
  console.log('Listening on port :', server.address().port);
});

app.get('/data', function(req, res){
  res.json(dataArr.data);
  // console.log('res', res);
  // res.send('hello world!!');
});
