var assert = require('chai').assert, parser = require('./../Connections/propertiesParser.js');

describe('parser suite', function(){
  it('should return something', function () {
    var connections;
    parser.readProperties(function(conn, err){
      if(err) throw err;
      connections = conn;
    });
    assert.isNotNull(connections);
  });
});

