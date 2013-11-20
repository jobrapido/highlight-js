module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'jr-highlight.js',
        dest: 'jr-highlight.min.js'
      }
    },
    jshint: {
      all: ['jr-highlight.js'],
      options: {
        'node': true,
        'browser': true,
        'bitwise': true,
        'camelcase': true,
        'curly': true,
        'eqeqeq': true,
        'immed': true,
        'latedef': true,
        'newcap': true,
        'noarg': true,
        'quotmark': 'single',
        'regexp': true,
        'undef': true,
        'unused': true,
        'trailing': true,
        'smarttabs': true,
        'jquery': true
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'jshint']);

};