var stringUtils = require('stringUtils');

module.exports.createTableSql = function(table){
  var columns = table.columns, sqlStart = 'CREATE TABLE ', pK = '';
  sqlStart += stringUtils.toSqlCase(table.name) + '\n';
  sqlStart += '(\n';
  columns.forEach(function(column, index, array){
    var endOfLine = '';    
    if(column.priKey){
      pK = stringUtils.toSqlCase(column.name);
    }
    if(column.autoInc){
      endOfLine += ' AUTO_INCREMENT';  
    }
    if(column.nul){
      endOfLine += ' NOT NULL';
    }
    if(index + 1 !== array.length || pK.length > 1){
      endOfLine += ',';
    }
    sqlStart += stringUtils.toSqlCase(column.name) + ' ' + column.type + endOfLine + '\n';
  });
  if(pK){
    sqlStart += 'PRIMARY KEY (' + pK + ')\n';
  }
  sqlStart += ')';
  return sqlStart;
};



