var Table = require('table'), Column = require('column');

module.exports.beforeTest = function(obj){
  var userTable = new Table('user','SmileWithMe', 'testConnection');
  var idColumn = new Column('ID', 'INT');
  idColumn.primaryKey(true);
  idColumn.autoIncremant(true); 
  idColumn.notNull(true);
  var emailColumn = new Column('email', 'VARCHAR(75)');
  emailColumn.notNull(true);
  var password = new Column('password', 'VARCHAR(18)');
  password.notNull(true);
  userTable.setColumns([idColumn, emailColumn, password]);
  obj.addTableDefinition(userTable);
  return obj;
}

module.exports.test = function(obj){


}

module.exports.afterTest = function(obj){


}
