var assert = require('chai').assert, Table = require('table'), Column = require('column'), Row = require('Row'),tableParser = require('tableParser');

describe('Table Parser Test Suite', function(){
  it('Should parse a  simple table object down to a basic mySql query', function(){
    var newTable = new Table('user');
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

describe('Row Parser Test Suite', function(){
  it('should parse a row object down to insert statement', function(){
    var dataRow = new Row('Users');
    dataRow.column('username').value('cwl97045');
    dataRow.column('password').value('redhat64');
    dataRow.column('email').value('redred@gmail.com');
    var sql = tableParser.createRowSql(dataRow);
    assert.equal(sql,'INSERT INTO USERS (USERNAME,PASSWORD,EMAIL) VALUES (cwl97045,redhat64,redred@gmail.com)');
  });
});
