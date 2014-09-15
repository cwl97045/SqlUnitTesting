module.exports.toSqlCase = function(string){
  string = string.toUpperCase();
  string = string.split(' ');
  return string.join('_');
};

