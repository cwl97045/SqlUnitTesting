var TestRunner = require('TestRunner');

module.exports.connectionSetUp = function(Test, Connections, databaseInterfaces){
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

module.exports.generateSql = function (TestRunner, TableParser){
  var tableDefinitionToRun = (TestRunner.tableDefinitions.length > 0), dataRowsToRun =(TestRunner.dataRows.length > 0);
  if(tableDefinitionToRun){
    var definitions = TestRunner.tableDefinitions;
    definitions.forEach(function(table){
      TestRunner.addSql(TableParser.createTableSql(TestRunner, table));
    });
  }
  if(dataRowsToRun){
    var dataRowsToRun = TestRunner.dataRows;
    dataRowsToRun.forEach(function(){
    
    });
  }
}



