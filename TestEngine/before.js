var tests = require('register').register(), 
TestRunner = require('TestRunner'), connections = require('propertiesParser'), conn, databaseInterfaces = require('DatabaseInterface')(),
tableParser = require('tableParser');

connections.readProperties(function(data, err){
  if(err) throw err;
  conn = data
});

tests.forEach(function(item, index, array){
  var Runner = item.beforeTest(new TestRunner());
  Runner.tableDefinitions.forEach(function(item, index, array){
    Runner.connection = conn[item.connection];
    Runner.db = databaseInterfaces[Runner.connection.connectionType];
    Runner.dbConnection = Runner.db.createConnection(Runner.connection.info);
    var statement = tableParser.createTableSql(item);
    //SETUP TO RUN AS A SCRIPT
    Runner.db.executeQuery(Runner.dbConnection, statement, function(err, rows, fields){
      if(err) throw err;
    });
  });
  Runner.dataRows.forEach(function(item,index,array){
    var statement = tableParser.createRowSql(item);
    //SETUP TO RUN AS A SCRIPT
    Runner.db.executeQuery(Runner.dbConnection, statement, function(err,rows,fields){
      if(err) throw err;
    });
  });
});



