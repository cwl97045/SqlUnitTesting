module.exports.parse = function (table, stringUtils){   
  var columns = table.columns, primaryKey = '', foreignKeys = [], endOfLine = '';
  var sqlString = "CREATE TABLE " + stringUtils.toSqlCase(table.name) + ' ( ';    
  for(var column in columns){
    column = columns[column];
    endOfLine = '';
    if(column.priKey){
      primaryKey += stringUtils.toSqlCase(column.name) + ','; 
    }
    if(column.fk){
      foreignKeys.push(column);
    }
    if(column.nul){
      endOfLine += ' NOT NULL';
    }
    if(column.autoInc){
      
      endOfLine += ' AUTO_INCREMENT';
    }
    sqlString += stringUtils.toSqlCase(column.name) + ' ' + column.type + endOfLine + ',';
  }
  sqlString = sqlString.slice(0, sqlString.length - 1);
  if(primaryKey.length > 0){
    sqlString += ', PRIMARY KEY (' + primaryKey.slice(0, primaryKey.length -1) + ')';
  }
  if(foreignKeys[0]){
    foreignKeys.forEach(function(column){
      sqlString += ', FOREIGN KEY ( ' + column.name + ' ) REFERENCES ' + stringUtils.toSqlCase(column.fkTable) + '( ' + stringUtils.toSqlCase(column.fkColumn) + ')';
    });
  } 
  return sqlString + ')'; 
};
