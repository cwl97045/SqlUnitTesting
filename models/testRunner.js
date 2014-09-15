module.exports = function(){
  return {
    tableDefinitions : [],
    addTableDefinition : function(table){
      this.tableDefinitions.push(table);
    }
  };
};
