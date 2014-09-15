var tests = require('register').register(), 
TestRunner = require('TestRunner'), connections = require('propertiesParser'), conn, databaseInterfaces = require('DatabaseInterface')();
connections.readProperties(function(data, err){
  if(err) throw err;
  conn = data
});

tests.forEach(function(item, index, array){
  var setUp = item.beforeTest(new TestRunner());
  setUp.tableDefinitions.forEach(function(item, index, array){
    var connection = conn[item.connection];
    var db = databaseInterfaces[connection.connectionType];
    var dbConnection = db.createConnection(connection.info);
    console.log(dbConnection); 
  });
});



