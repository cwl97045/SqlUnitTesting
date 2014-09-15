var stringUtils = require('stringUtils'), connections = require('propertiesParser'), conn;
connections.readProperties(function(data,err){
  if(err) throw err;
  conn = data;
});
module.exports.createTableSql = function(table){
  var columns = table.columns, sqlStart = 'CREATE TABLE ', pK = '', connectionType = conn[table.connection].connectionType, fk = '';
  console.log(connectionType);
  sqlStart += stringUtils.toSqlCase(table.name) + '\n';
  sqlStart += '(\n';
  columns.forEach(function(column, index, array){
    var endOfLine = '';        
    if(column.autoInc){
      endOfLine += ' AUTO_INCREMENT';  
    }
    if(column.nul){
      endOfLine += ' NOT NULL';
    }
    if(column.priKey){
      if(connectionType.toLowerCase() === 'oracle'){
        endOfLine += ' PRIMARY KEY'; 	
      } else {
        pK = stringUtils.toSqlCase(column.name);
      }
    }
    if(index + 1 !== array.length || pK.length > 1){
      endOfLine += ',';
    }
    sqlStart += stringUtils.toSqlCase(column.name) + ' ' + column.type + endOfLine + '\n';
  });
  if(pK){
    if(connectionType.toLowerCase() === 'mysql'){
      sqlStart += 'PRIMARY KEY (' + pK + ')\n';      
    }
  }
  sqlStart += ')';
  return sqlStart;
};



