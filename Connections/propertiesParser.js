var fs = require('fs');
/*
  GOAL: Read and parse connection.properties file to create proper database url and connections
*/
var fileString = __dirname + '/../dbconfig/connection.properties';

var connectionNameExistsInObject = function(obj, connectionName){
  if(obj[connectionName]){
    return true;
  } else {
    return false;
  }
};


module.exports.readProperties = function (callback, optionalFileString) {
  if(optionalFileString){
    fileString = optionalFileString; 
  }
  var connections = {};
  var data = fs.readFileSync(fileString).toString();
  var fileLines = data.split('\n');
  fileLines = fileLines.filter(function(item,index,array){if(item !== ' '){ return item;}});
  fileLines.forEach(function(line, index, array){
      var connectionName = line.split('.')[1];
      if(connectionNameExistsInObject(connections, connectionName)){
        var propFound = line.split('.')[2].split('=');
        connections[connectionName].info[propFound[0]] = propFound[1];            
      } else {
        connections[connectionName] = {};
        connections[connectionName].info = {};
        var cnnectTypeName = line.split('.')[0]; 
        connections[connectionName].connectionType = cnnectTypeName;
        var prop = line.split('.')[2].split('=');
        connections[connectionName].info[prop[0]] = prop[1];
      }
  });
  callback(connections);
};



