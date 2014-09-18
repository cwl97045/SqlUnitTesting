var TestRunner = require('TestRunner');

module.exports.connectionSetUp = function(Test, Connections, databaseInterfaces){
  var setUp = Test.before(new TestRunner()), conn;
  Connections.readProperties(function(data, err){
    if(err) throw err;
      conn = data;
  });
  setUp.connection = conn[setUp.connectionName];
  setUp.db = databaseInterfaces[setUp.connection.connectionType];
  return setUp;
};

module.exports.generateSql = function (TestRunner, TableParser, dbParser ,stringUtils){
  var tableDefinitionToRun = (TestRunner.tableDefinitions.length > 0), dataRowsToRun =(TestRunner.dataRows.length > 0);
  if(tableDefinitionToRun){
    var definitions = TestRunner.tableDefinitions;
    definitions.forEach(function(table){
      TestRunner.addSql(TableParser.createTableSql(TestRunner.connection.connectionType,table, dbParser, stringUtils));
    });
  };
  if(dataRowsToRun){
    var dataRowsToRun = TestRunner.dataRows;
    dataRowsToRun.forEach(function(row){
      TestRunner.addSql(TableParser.createRowSql(row, stringUtils));
    });
  };
  return TestRunner;
};
/*
module.exports.executeBeforeSql = function (TestRunner, callback){
  var beforeSql = TestRunner.beforeSql;
  var TestRunner.dbConnection = TestRunner.db.createConnection(TestRunner.connection.info);
  beforeSql.forEach(function(sql){
    TestRunner.executeQuery(TestRunner.dbConnection, sql, function(err, rows, fields){
      if(err) throw err;
  });
  callback();
};*/


