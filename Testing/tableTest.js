var assert = require('chai').assert, Table = require('table');

describe('Table Model Suite', function(){
  it('Should create a table with a name, database, and connection', function(){
    var newTable = new Table('Hello', 'Users', 'testConnection'); 
    assert.equal(newTable.name, 'Hello');
    assert.equal(newTable.database, 'Users');
    assert.equal(newTable.connection, 'testConnection');
  });
});
