var assert = require('chai').assert, parser = require('propertiesParser');

describe('parser suite', function(){
  var connections;
  it('should return something', function () {    
    parser.readProperties(function(conn, err){
      if(err) throw err;
      connections = conn;
    });
    assert.isNotNull(connections);
  });
  it('should have read the properties file for mySqlTestConnection', function () {
    var connection = connections.mySqlTestConnection; 
    assert.equal(connection.connectionType, 'mySql');
    var info = connection.info;
    assert.equal(info.hostname, 'localhost');
    assert.equal(info.port, '37322');
    assert.equal(info.database, 'sqlunittesting');
    assert.equal(info.user, 'cwl97045');
    assert.equal(info.password, 'barkdust1');
  });
});

