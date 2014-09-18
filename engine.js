var Tests = require('register').register(), TestRunner = require('TestRunner'), beforeModule = require('BeforeModule'), Connections = require('propertiesParser'), databaseInterfaces = require('DatabaseInterface')(), TableParser = require('tableParser'), dbParser = require('DBParser').register(),
stringUtils = require('stringUtils');

Tests.forEach(function(test){
  console.log(databaseInterfaces.toString());
  testRunner = beforeModule.connectionSetUp(test, Connections, databaseInterfaces);
  testRunner = beforeModule.generateSql(testRunner, TableParser, dbParser ,stringUtils);
  console.log(testRunner);
  beforeModule.executeBeforeSql(testRunner, function(){
    console.log('Ready to start testing....');
  });
});
