module.exports.getNamesOfAllFilesInTheDirectory = function(fs,dirPath){
  return fs.readdirSync(dirPath);
};
