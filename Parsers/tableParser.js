var stringUtils = require('stringUtils'), connections = require('propertiesParser'), conn;
connections.readProperties(function(data,err){
  if(err) throw err;
  conn = data;
});
module.exports.createTableSql = function(table){
  var columns = table.columns, sqlStart = 'CREATE TABLE ', pK = '', connectionType = conn[table.connection].connectionType, fk = [];
  
  return sqlStart;
};

module.exports.createRowSql = function(dataRow){
  var sqlStart = 'INSERT INTO ' + stringUtils.toSqlCase(dataRow.table) + ' (', columns = '', values = '';
  for(var prop in dataRow.map){
    columns += stringUtils.toSqlCase(prop) + ',';
    values += dataRow.map[prop] + ',';
  }
  sqlStart += columns.slice(0, columns.length - 1) + ')';
  sqlStart += ' VALUES (' + values.slice(0, values.length - 1) + ')';
  return sqlStart;
};	



