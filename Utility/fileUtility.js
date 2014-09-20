module.exports.getNamesOfAllFilesInTheDirectory = function(fs,dirPath){
  return fs.readdirSync(dirPath).map(function(item){  return item.split('.')[0];});
};
