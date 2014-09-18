var stringUtils = require('stringUtils');

module.exports = function(table){
  return {
    map : {},
    table : table,
    column : function (column) {
      var that = this, saveCol = column;
      return {
        value : function(value){
          that.map[saveCol] = stringUtils.wrapInQuotes(value);
        }
      };
    }
  };
};
