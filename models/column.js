module.exports = function(name, type){
  return {
    name : name,
    priKey : false,
    autoInc : false,
    nul : false,
    fk : false,
    fkTable : '',
    fkColumn : '',
    foreignKey : function (bool){
      this.fk = bool;
      return this.setFkTable;
    },
    setFkTable : function(table){
      this.fkTable = table;
      return this.setFkTableColumn;
    },
    setFkTableColumn : function(column){
      this.fkColumn = column;
    },
    type : type,
    setType : function (type){
      this.type = type;
    },
    primaryKey : function(bool){
      this.priKey = bool;
    },
    autoIncremant : function(bool){
      this.autoInc = bool;
    },
    notNull : function(bool){
      this.nul = bool;
    }
  };
};
