module.exports = function(){
  return {
    map : {},
    column : function (column) {
      var that = this, saveCol = column;
      return {
        value : function(value){
          that.map[saveCol] = value;
        }
      };
    }
  };
};
