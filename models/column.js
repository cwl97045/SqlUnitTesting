module.exports = function(name, type){
  return {
    name : name,
    priKey : false,
    autoInc : false,
    nul : false,
    fk : false,
    fkTable : '',
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
