var express = require('express');
var app = express();
var fs = require('fs');
var router = express.Router();
var fileUtils = require('FileUtility');


app.set('view engine', 'ejs');

var test = fileUtils.getNamesOfAllFilesInTheDirectory(fs, 'Tests');
test = test.	map(function(item){
  return item.split('.')[0];
});

router.get('/', function(req, res){
  //Greeting page/Test list view page
  res.render('index', {tests: test});
});

router.get('/test/:testName', function(req, res){
  res.send('This is the ' + req.params.testName + '!');
});

app.use('/', router);

app.listen(3000);
