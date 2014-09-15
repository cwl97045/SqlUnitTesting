module.exports.toSqlCase = function(string){
  return string.toUpperCase().split(' ').join('_');
};

