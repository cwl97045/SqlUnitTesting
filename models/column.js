module.exports = function(name, type){
  return {
    name : name,
    priKey : false,
    autoInc : false,
    type : type,
    setType : function (type){
      this.type = type;
    },
    primaryKey : function(bool){
      this.priKey = bool;
    },
    autoIncremant : function(bool){
      this.autoInc = bool;
    }
  }
}
