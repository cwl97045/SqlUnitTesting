var mySql = require('mysql');

module.exports = function(){
  return {
    'mySql' : {
       createConnection : function(connInfo){
         return mySql.createConnection(connInfo);	 
       },
       executeQuery : function(connection, statement, callback){
         connection.query(statement, callback);
       }
     }
  };
};
