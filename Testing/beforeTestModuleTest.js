var beforeModule = require('BeforeModule'), assert = require('chai').assert ;
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
});
