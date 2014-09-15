var assert = require('chai').assert, table = require('table');

describe('Table Model Suite', function(){
  it('Should create a table with a name, database, and connection', function(){
    var newTable = new table('Table', 'USers', 'myConnection');
    assert.equal(newTable.name, 'Table');
  });
});
