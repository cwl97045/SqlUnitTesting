module.exports = function(sql, testRunner){
  return function (callback){
    testRunner.db.executeQuery(testRunner.dbConnection,sql, function(err){
      if(err) throw err;
      callback(null);
    });
  };
};

