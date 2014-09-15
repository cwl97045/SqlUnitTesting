var Table = require('table'), Column = require('column'), Row = require('Row');

module.exports.beforeTest = function(obj){
  var userTable = new Table('user','SmileWithMe', 'mySqlTestConnection');
  var idColumn = new Column('ID', 'INT');
  idColumn.primaryKey(true);
  idColumn.autoIncremant(true); 
  idColumn.notNull(true);
  var stateColumn = new Column('STATE_ID', 'INT');
  stateColumn.foreignKey(true).forColumn('ID').inTable('state');
  var emailColumn = new Column('email', 'VARCHAR(75)');
  emailColumn.notNull(true);
  var password = new Column('password', 'VARCHAR(18)');
  password.notNull(true);
  userTable.setColumns([idColumn, emailColumn, password]);
  obj.addTableDefinition(userTable);
  var dataRow = new Row('user');
  dataRow.column('email').value('laytonsunlimited@gmail.com');
  dataRow.column('password').value('H@rr');
  obj.addDataRow(dataRow);
  return obj;
}

module.exports.test = function(obj){


}

module.exports.afterTest = function(obj){


}
