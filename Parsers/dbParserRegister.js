var mysqlParser = require('./mySqlParser');

module.exports.register = function (){
  return {
     mysql : mysqlParser.parse
  };


};
