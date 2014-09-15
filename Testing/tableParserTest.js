var assert = require('chai').assert, Table = require('table'), Column = require('column'), tableParser = require('tableParser');

describe('Table Parser Test Suite', function(){
  it('Should parse a  simple table object down to a basic mySql query', function(){
    var newTable = new Table('user', 'site', 'mySqlTestConnection');
    var idColumn = new Column('ID', 'INT');
    idColumn.notNull(true);
    idColumn.autoIncremant(true);
    idColumn.primaryKey(true);
    var nameColumn = new Column('name', 'VARCHAR(35)');
    nameColumn.notNull(true);
    newTable.setColumns([idColumn, nameColumn]);
    var tableSql = tableParser.createTableSql(newTable);	
    assert.equal(tableSql,'CREATE TABLE USER\n(\nID INT AUTO_INCREMENT NOT NULL,\nNAME VARCHAR(35) NOT NULL,\nPRIMARY KEY (ID))');
  });
});
