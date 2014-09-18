var beforeModule = require('BeforeModule'), assert = require('chai').assert, tableParsers = require('tableParser'), stringUtils = require('stringUtils'), parsers = require('DBParser').register();
/*module.exports.connectionSetUp = function(Test, Connections, databaseInterfaces){
  var setUp = Test.before(new TestRunner()), conn;
  Connections.readProperties(function(data, err){
    if(err) throw err;
      conn = data;
  });
  setUp.connection = conn[setUp.connectionName];
  setUp.db = databaseInterfaces[setUp.connection.connectionType];
  return setUp;
};*/
describe('BeforeModule Unit Test Suit', function(){
  it('should attach connection data to the TestRunner', function (){
    var mockTestRunner = {
      connectionName : 'fakeCon',
      connection : {},
      db : {},
      dbConnection : {}
    }, mockTest = {
      before : function (){
        return mockTestRunner;
      }
    }, mockConnections = {
      readProperties : function (callback){
        var fake = {
          fakeCon : {
            connectionType : 'oracle',
            info : {
              name : 'Hi!'   
            }
          }
        };
        callback(fake);
      }
    }, mockDatabaseInterface = {
       oracle : {
         executeSql : function(){
           return 'Hello, world!';
         }
       }
    };
    var TestRun = beforeModule.connectionSetUp(mockTest, mockConnections, mockDatabaseInterface);
    assert.equal(TestRun.connectionName, 'fakeCon');
    assert.equal(TestRun.connection.connectionType, 'oracle');
    assert.equal(TestRun.connection.info.name, 'Hi!');
    assert.equal(TestRun.db.executeSql(), 'Hello, world!');    
  });
  it('Should properly give the TestRunner the before Sql', function(){
     var mockTestRunner = {
       connection : {
         connectionType : 'mySql'
       },
       beforeSql : [],
       addSql : function(sql){
         this.beforeSql.push(sql);
       },
       dataRows : [],
       tableDefinitions : [
         {
           name : 'FaKe TaBlE',
           columns : [
             {
               name : 'fake Col One',
               type : 'VARCHAR(10)',
               nul : false,
               autoInc : false
             },
             { 
               name : 'Fake ID',
               type : 'INT',
               nul : false,
               autonInc : true,
               priKey : true
             },
             {
               name : 'for Key',
               type : 'INT',
               nul : false,
               fk : true,
               fkTable : 'Other Fake Table',
               fkColumn : 'Other Fake Id'
             }
           ]
         }
       ]
     };
     var retRunner = beforeModule.generateSql(mockTestRunner, tableParsers, parsers,stringUtils);
     
  });
});
