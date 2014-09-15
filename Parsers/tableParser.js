var toSqlCase = function(string){
  string = string.toUpperCase();
  string = string.split(' ');
  return string.join('_');
};

module.exports.parseTable = function(table){
  var columns = table.columns;
  
}



