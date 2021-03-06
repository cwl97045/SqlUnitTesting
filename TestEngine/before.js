var TestRunner = require('TestRunner'), async = require('async'), asyncObj = require('AsyncObj');

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
  var tableDefinitionToRun = (TestRunner.tableDefinitions.length > 0), dataRowsToRun =(TestRunner.dataRows.length > 0), rows = [], definitions = [];
  if(tableDefinitionToRun){
    definitions = TestRunner.tableDefinitions;
    definitions.forEach(function(table){
      TestRunner.addSql(TableParser.createTableSql(TestRunner.connection.connectionType,table, dbParser, stringUtils));
    });
  }
  if(dataRowsToRun){
    rows = TestRunner.dataRows;
    rows.forEach(function(row){
      TestRunner.addSql(TableParser.createRowSql(row, stringUtils));
    });
  }
  return TestRunner;
};

module.exports.executeBeforeSql = function (TestRunner,callback){
  var beforeSql = TestRunner.beforeSql, dbCalls = [];
  TestRunner.dbConnection = TestRunner.db.createConnection(TestRunner.connection.info);
  beforeSql.forEach(function(statement){
    dbCalls.push(new asyncObj(statement, TestRunner));
  });
  async.waterfall(dbCalls, function(err){
    if(err) throw err;
    callback(testRunner);
  });
};


