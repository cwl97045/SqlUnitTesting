var assert = require('chai').assert, Table = require('table'), Column = require('column');

describe('Table Model Suite', function(){
  it('Should create a table with a name, database, and connection', function(){
    var newTable = new Table('Hello'); 
    assert.equal(newTable.name, 'Hello');
  });
  it('should deal with it\'s columns', function(){
    var newColumn = new Column('name', 'VARCHAR');
    var otherColumns = new Column('thing', 'INT');
    var newTable = new Table('red');
    newTable.addColumn(newColumn);
    newTable.addColumn(otherColumns);
    assert.equal(newTable.columns.length, 2);
  });
});
