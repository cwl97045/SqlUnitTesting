var assert = require('chai').assert, Column = require('column');

describe('column test suite', function(){
  it('should make columns correctly', function(){
    var newColumn = new Column('Booo', 'VARCHAR');
    assert.equal(newColumn.name, 'Booo');
    assert.equal(newColumn.type, 'VARCHAR');
    assert.isFalse(newColumn.priKey);
    assert.isFalse(newColumn.autoInc);
  });
  it('should be able to become a primary key', function(){
    var newColumn = new Column('Blasda', 'dfasdf');
    assert.isFalse(newColumn.priKey);
    newColumn.primaryKey(true);
    assert.isTrue(newColumn.priKey);
  });
  it('should be able to become auto incremented', function(){
    var newColumn = new Column('Blasda', 'dfasdf');
    assert.isFalse(newColumn.autoInc);
    newColumn.autoIncremant(true);
    assert.isTrue(newColumn.autoInc);
  });
});
