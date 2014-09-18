/*Import test via require-module system and add them to the register*/
var basicTest = require('./basicTest'), withSqlTest = require('./WithSqlTest');


module.exports.register = function(){
  return [basicTest];
};
