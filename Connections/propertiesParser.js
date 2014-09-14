var fs = require('fs');
/*
  GOAL: Read and parse connection.properties file to create proper database url and connections
*/

var readProperties = function (callback) {
  fs.readFile('../dbconfig/connection.properties','UTF-8', function (err, data){
    var urls = [];
    if(err) throw err;
    

  });
}

readProperties();



