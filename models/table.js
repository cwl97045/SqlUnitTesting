module.exports = function(name, database, connection){
   return {
     name : name,
     columns : [],
     addColumn : function(column){
       this.columns.push(column);
     },
     setColumns : function(columnSet){
       this.columns = columnSet;
     }
   };
};
