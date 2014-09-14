var fs = require('fs');
/*
  GOAL: Read and parse connection.properties file to create proper database url and connections
*/
var inBetweenPeriods = /\.(.+)\./; 
//var afterPeriod = ;
var beforePeriod = /^(.*?\w+)/ ;

var connectionNameExistsInObject = function(obj, connectionName){
  if(obj[connectionName]){
    return true;
  } else {
    return false;
  }
}


var readProperties = function (callback) {
  fs.readFile('../dbconfig/connection.properties','UTF-8', function (err, data){
    var connections = {};
    if(err) throw err;
    var fileLines = data.split('\n');
    fileLines.forEach(function(line, index, array){
       var connectionName = inBetweenPeriods.exec(line);
       if(connectionName){
         connectionName = connectionName[0].slice(1, connectionName[0].length - 1);
       }
       if(connectionNameExistsInObject(connections, connectionName)){
         var currentConnection = connections[connectionName];
             
       } else {
         connections[connectionName] = {};
         connections[connectionName]['info'] = {};
         var cnnectTypeName = beforePeriod.exec(line)[0];
         connections[connectionName]['connectionType'] = cnnectTypeName;
       }
       console.log(connections);      
    });
  });
}

readProperties();



