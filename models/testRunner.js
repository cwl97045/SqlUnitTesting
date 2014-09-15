module.exports = function(){
  return {
    tableDefinitions : [],
    dataRows : [],
    addDataRow : function(row){
      this.dataRows.push(row);
    },
    addTableDefinition : function(table){
      this.tableDefinitions.push(table);
    },
    connection : {},
    
  };
};
