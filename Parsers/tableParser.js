var stringUtils = require('stringUtils'), parsers = require('DBParser').register();

module.exports.createTableSql = function(TestRunner,table){
  var connectionType = TestRunner.connection.connectionType;
  return parsers[connectionType.toLowerCase()](table, stringUtils);     
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
