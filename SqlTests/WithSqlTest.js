module.exports.beforeTest = function(obj){
  obj.addSql('CREATE TABLE PET (NAME VARCHAR(20), OWNER VARCHAR(20), SPECIES VARCHAR(20), SEX CHAR(1), BIRTH DATE, DEATH DATE)');  
  obj.addSql("INSERT INTO TABLE PET(NAME, OWNER, SPECIES, SEX, BIRTH, DEATH) VALUES('Phil', 'Christopher', 'Human', 'M', '1/1/1753', '5/28/1993')");
  return obj;
}

module.exports.test = function(obj){


}

module.exports.afterTest = function(obj){


}
