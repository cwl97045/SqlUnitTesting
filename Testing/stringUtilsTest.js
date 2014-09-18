var assert = require('chai').assert, stringUtil = require('stringUtils');

describe('String Utilities Test Suite', function(){
  it('Should have a function to put things to SQL case', function(){
    var str = stringUtil.toSqlCase('red hat');
    assert.equal(str, 'RED_HAT');
    var otherStr = stringUtil.toSqlCase('hat');
    assert.equal(otherStr, 'HAT');
    var nextStr = stringUtil.toSqlCase('user id column');
    assert.equal(nextStr, 'USER_ID_COLUMN');
  });
  it('Should wrap things in quotes so they don\'t have too', function(){
    var str = stringUtil.wrapInQuotes('Man');
    assert.equal(str, "'Man'");
  });
});


