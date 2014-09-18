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
    },
    jshint : {
      all:['Connections/*.js', 'models/*.js', 'Testing/*.js', 'Parsers/*.js', 'dbconfig/*.js', 'TestEngine/*.js', 'SqlTests/*.js', 'Utility/*.js', '*.js']           
    }
  });
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-named-modules');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['mochaTest', 'jshint']);
  grunt.registerTask('hint', ['jshint']);
};
