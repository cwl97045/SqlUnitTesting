var tests = require('register').register(), 
TestRunner = require('TestRunner');

tests.forEach(function(item, index, array){
  var setUp = item.beforeTest(new TestRunner());
  console.log(setUp);
});



