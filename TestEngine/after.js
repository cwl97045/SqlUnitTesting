var async = require('async'), asyncObj = require('AsyncObj');

module.exports.grabCleanUp = function(Test, TestRunner){
  var cleanUp = Test.after(TestRunner);
  return cleanUp;
};

module.exports.cleanUp = function(TestRunner, callback){
  var cleanUpSql = TestRunner.afterSql, dbCalls = [];
  cleanUpSql.forEach(function(sql){
    dbCalls.push(new asyncObj(sql, TestRunner));      
  });
  async.waterfall(dbCalls, function(err){
    if(err) throw err;
    callback(testRunner);
  });
};
