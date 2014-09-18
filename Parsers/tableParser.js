var stringUtils = require('stringUtils');
var parsers = {
  mySql : function(table){
    var columns = table.columns, primaryKey = '', foreignKeys = [], endOfLine = '';
    var sqlString = "CREATE TABLE " + stringUtils.toSqlCase(table.name) + ' ( ';    
    for(var column in columns){
      column = columns[column];
      endOfLine = '';
      if(column.priKey){
        primaryKey += column.name + ','; 
      }
      if(column.fK){
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
        sqlString += ', FOREIGN KEY ( ' + column.name + ' ) REFERENCES ' + column.fkTable + '( ' + column.fkColumn + ')';
      });
    } 
    return sqlString + ')';  
  },



};



module.exports.createTableSql = function(TestRunner,table){
  var connectionType = TestRunner.connection.connectionType;
  return parsers[connectionType](table);     
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






