var tests = require('register').register(), 
TestRunner = require('TestRunner'), connections = require('propertiesParser'), conn, databaseInterfaces = require('DatabaseInterface')(),
tableParser = require('tableParser');

module.exports.connectionSetUp = function(Test){
  var setUp = Test.before(new TestRunner()), conn;
  connections.readProperties(function(data, err){
    if(err) throw err;
      conn = data;
  });
  setUp.connection = conn[setUp.connectionName];
  setUp.db = databaseInterfaces[setUp.connection.connectionType];
  setUp.dbConnection = setUp.db.createConnection(setUp.connection.info);
  return setUp;
}

module.exports.before = function (TestRunner){
  var tableDefinitionToRun = (TestRunner.tableDefinitions.length > 0), sqlToRun = (TestRunner.beforeSql.length > 0)
  ,dataRowsToRun = (TestRunner.dataRows.length > 0);
  connections.readProperties(function(data, err){
    if(err) throw err;
      conn = data
  });
  if(tableDefinitionToRun){
    tests.forEach(function(item, index, array){
      var Runner = item.beforeTest(TestRunner);
      Runner.tableDefinitions.forEach(function(item, index, array){
        Runner.connection = conn[item.connection];
        Runner.db = databaseInterfaces[Runner.connection.connectionType];
        Runner.dbConnection = Runner.db.createConnection(Runner.connection.info);
        var statement = tableParser.createTableSql(item);
        Runner.db.executeQuery(Runner.dbConnection, statement, function(err, rows, fields){
          if(err) throw err;
        });
      });
  }
  if(sqlToRun){



  }
  if(dataRowsToRun){
    Runner.dataRows.forEach(function(item,index,array){
      var statement = tableParser.createRowSql(item);
      Runner.db.executeQuery(Runner.dbConnection, statement, function(err,rows,fields){
        if(err) throw err;
      });
    });
  }
  });
  
}



