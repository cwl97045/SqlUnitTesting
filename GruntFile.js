module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mochaTest: {
      test : {
        options: {
          reporter: 'spec',
          clearRequireCache: true
        },
        src: ['Testing/*.js']
      }
    }
  });
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.registerTaks('default', ['mochaTest']);
};
