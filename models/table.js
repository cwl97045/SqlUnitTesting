
moduel.export = function(name, database, connection){
   this.name = name,
   this.columns = [],
   this.addColumn = function(column){
     this.columns.push(column);
   },
   this.setColumns = function(columnSet){
     this.columns = columnSet;
   },
   this.database = database,
   this.connection = connection,
   this.setDatabase = function(database){
     this.database = database;
   },
   this.setConnection = function(connection){
     this.connection = connection;
   }
}
