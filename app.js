var express = require('express');
var app = express();
var fs = require('fs');
var router = express.Router();
var fileUtils = require('FileUtility');

app.set('view engine', 'ejs');

router.get('/', function(req,res){
  res.redirect('/test');
});

router.get('/test', function(req, res){
  var test = fileUtils.getNamesOfAllFilesInTheDirectory(fs, 'Tests');
  res.render('index', {tests: test});
});

router.get('/test/new', function(req, res){
  res.send('you want make new test?');
});

router.post('/test/new', function(req, res){
  res.redirect('/test');
});

router.get('/test/:testName', function(req, res){
  res.send('This is the ' + req.params.testName + '!');
});

app.use('/', router);

app.listen(3000);
