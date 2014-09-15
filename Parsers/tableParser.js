var stringUtils = require('stringUtils');

module.exports.createTableSql = function(table){
  var columns = table.columns, sqlStart = 'CREATE TABLE ', pK;
  sqlStart += stringUtils.toSqlCase(table.name) + '\n';
  sqlStart += '(\n'
  columns.forEach(function(column, index, array){
    var comma = ',';
    if(index + 1 === array.length){
      comma = '';
    }
    if(column.priKey){
      pk = stringUtils.toSqlCase(column.name);
    }
    sqlStart += stringUtils.toSqlCase(column.name) + ' ' + column.type + comma + '\n';
  });
  if(pK){
    sqlStart += 'PRIMARY KEY (' + pk + ')\n';
  }
  sqlStart += ')';
  return sqlStart;
};



