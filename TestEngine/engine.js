var Tests = require('register').register(), TestRunner = require('TestRunner'), beforeModule = require('BeforeModule'), Connections = require('propertiesParser'), databaseInterfaces = require('DatabaseInterface')(), TableParser = require('tableParser'), dbParser = require('DBParser').register(), stringUtils = require('stringUtils'), afterModule = require('AfterModule');

Tests.forEach(function(test){
  testRunner = beforeModule.connectionSetUp(test, Connections, databaseInterfaces);
  testRunner = beforeModule.generateSql(testRunner,TableParser,dbParser,stringUtils);
  beforeModule.executeBeforeSql(testRunner, function(testRunner){
    console.log('Tables created and data loaded!');
    testRunner = afterModule.grabCleanUp(test, testRunner);
    /*
       ACTUAL TESTING SHOULD OCCUR SOMEWHERE IN HERE
    */
    afterModule.cleanUp(testRunner,function(){
      console.log('Tables delted and data removed :(');
    });
  });
});
