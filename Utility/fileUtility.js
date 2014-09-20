module.exports.getNamesOfAllFilesInTheDirectory = function(fs,dirPath){
  return fs.readdirSync(dirPath).map(function(item){  return item.split('.')[0];});
};

module.exports.createFileWithContent = function(fs,dirName,fileName, content, callback){
  fs.writeFile(dirName + fileName, content, callback);
}

module.exports.grabFileContentsFromDirectoryByName = function(fs, dirName, fileName,encoding){
  if(!encoding){
    encoding = "UTF-8";
  }
  return fs.readFileSync(dirName + fileName, encoding);
}
