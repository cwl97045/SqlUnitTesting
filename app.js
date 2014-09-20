var express = require('express');
var app = express();
app.set('view engine', 'ejs');


app.get('/', function(req, res){
  //Greeting page/Test list view page
  res.redirect('/test');
});

app.get('/test', function(req,res){
  res.render('index', {tests: ['hello', 'hello', 'hello', 'can', 'you', 'hear', 'me', 'now']});
});

app.listen(3000);
