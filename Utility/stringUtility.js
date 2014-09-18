module.exports.toSqlCase = function(string){
  return string.toUpperCase().split(' ').join('_');
};

module.exports.wrapInQuotes = function(string){
  return "'" + string +  "'";
};

