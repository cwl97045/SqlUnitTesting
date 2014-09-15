var assert = require('chai').assert, Table = require('table');

describe('Table Model Suite', function(){
  it('Should create a table with a name, database, and connection', function(){
    var newTable = new Table('Hello', 'Users', 'testConnection'); 
    assert.equal(newTable.name, 'Hello');
    assert.equal(newTable.database, 'Users');
    assert.equal(newTable.connection, 'testConnection');
  });
  it('Two tables should be two distinct entities', function (){
    var newTable = new Table('Yesy', 'Blah', 'Hat');
    var otherTable = new Table('no', 'not', 'hate');
    newTable.setDatabase('Clownsasdf');
    assert.equal(otherTable.database, 'not');
  });
  it('should be able to override its properties with it\'s own methods', function(){
    var newTable = new Table('Yess', 'goodbye', 'hate');
    assert.equal(newTable.name, 'Yess');
    assert.equal(newTable.database, 'goodbye');
    assert.equal(newTable.connection, 'hate');
    newTable.setDatabase('Hello');
    assert.equal(newTable.database, 'Hello');
    newTable.setConnection('Love');
    assert.equal(newTable.connection, 'Love');
  });
});
