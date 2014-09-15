module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mochaTest: {
      test : {
        options: {
          clearRequireCache: true
        },
        src: ['Testing/*.js']
      }
    }
  });
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-named-modules');
  grunt.registerTask('default', ['mochaTest']);
};
