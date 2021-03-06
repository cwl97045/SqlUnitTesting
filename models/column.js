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
      var that = this;
      this.fk = bool;
      return {
        forColumn : function(column){
          that.fkColumn = column;
          return {
            inTable : function(table){
              that.fkTable = table;
            }
          };
        }
      };
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
