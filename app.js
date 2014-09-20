var express = require('express');
var app = express();
var fs = require('fs');
var router = express.Router();
var fileUtils = require('FileUtility');
var bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

router.get('/', function(req,res){
  res.redirect('/test');
});

router.get('/test', function(req, res){
  var test = fileUtils.getNamesOfAllFilesInTheDirectory(fs, 'Tests');
  res.render('index', {tests: test});
});

router.post('/test', function(req,res){
  res.redirect('/test');
});

router.get('/test/new', function(req, res){
  res.render('CreateTestView');
});

router.post('/test/new', function(req, res){
  console.log(req.body);
  fileUtils.createFileWithContent(fs,'Tests/',req.body.title, req.body.content, function(err, data){
    if(err) throw err;
    res.redirect('/test');
  });
});

router.get('/test/:testName', function(req, res){
  var name = req.params.testName;
  var content = fileUtils.grabFileContentsFromDirectoryByName(fs, 'Tests/', name);
  //get file's content
  //parse the wiki-style into valid html
  res.render('TestView', {name : name,content : content});
});

app.use('/', router);
app.use(express.static(__dirname, 'css'));
app.listen(3000);
