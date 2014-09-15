var mySql = require('mysql');

module.exports = function(){
  return {
    'mySql' : {
       createConnection : function(connInfo){
         return mySql.createConnection(connInfo);	 
       },
       exectureQuery : function(connection, statement, callback){
         connection.connect();
         connection.query(statement, callback);
         connection.end();
       }
     }
  };
};
