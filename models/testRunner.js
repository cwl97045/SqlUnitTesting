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
    addSql : function(sql){
      this.beforeSql.push(sql);
    }
  };
};
