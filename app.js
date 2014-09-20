var express = require('express');
var app = express();
var fs = require('fs');
var fileUtils = require('FileUtility');

app.set('view engine', 'ejs');

var test = fileUtils.getNamesOfAllFilesInTheDirectory(fs, 'Tests');

app.get('/', function(req, res){
  //Greeting page/Test list view page
  res.redirect('/test');
});

app.get('/test', function(req,res){
  res.render('index', {tests: test});
});

app.listen(3000);
