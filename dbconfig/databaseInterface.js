var mySql = require('mysql');

module.export = function(){
  return {
    'mySql' : {
       createConnection : function(connInfo){
         return mySql.createConnection(conninfo);	 
       },
       exectureQuery : function(connection, statement, callback){
         connection.connect();
         connection.query(statement, callback);
         connection.end();
       }
     }
  }
}
