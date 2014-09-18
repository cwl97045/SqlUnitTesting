module.exports = function(){
  return {
    tableDefinitions : [],
    dataRows : [],
    db : {},
    dbInterface : {},
    addDataRow : function(row){
      this.dataRows.push(row);
    },
    addTableDefinition : function(table){
      this.tableDefinitions.push(table);
    },
    connection : {},
    beforeSql : [],
    connectionName : '',
    addSql : function(sql){
      this.beforeSql.push(sql);
    },
    setConnection : function(conName){
      this.connectionName = conName;
    },
    setDatabase : function(dbName){
      this.database = dbName;
    },
    sqlToTest : function(sql){
      var that = this;
      this.dbInterface.executeQuery(this, sql, function(err, rows, fields){
        that.results = rows;
      });
    },
    results : {},
    testResults : [],
    addTestResult : function(testResult){
      this.testResults.push(testResult);
    }
  };
};
