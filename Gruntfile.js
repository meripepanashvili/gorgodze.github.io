module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Tasks
    sass: { // Begin Sass Plugin
      dist: {
        options: {
          style: 'compressed'
        },
        files: {                                    // Dictionary of files
          'assets/stylesheets/style.preprocessed.css': 'assets/stylesheets/style.scss'         // 'destination': 'source'
        }
      }
    },
    postcss: {
      options: {
        map: {
          inline: false
        },
        processors: [
          require('autoprefixer')({browsers: '> 0.5%'}) // add vendor prefixes
        ]
      },
      dist: {
        src: 'assets/stylesheets/style.preprocessed.css',
        dest : 'assets/stylesheets/style.css'
      }
    },
    uglify: { // Begin JS Uglify Plugin
      build: {
      	files: [{
      		src: 'assets/js/index.js',
        	dest: 'assets/js/index.min.js'
      	},{
      		src: 'assets/js/skrollr.js',
        	dest: 'assets/js/skrollr.min.js'
      	}
      	]
      }
    },
    watch: { // Compile everything into one task with Watch Plugin
      css: {
        files: 'assets/stylesheets/*.scss',
        tasks: ['sass', 'postcss']
      },
      js: {
        files: 'assets/js/*.js',
        tasks: ['uglify']
      }
    }
  });

  // Load Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register Grunt tasks
  grunt.registerTask('default', ['watch']);
}

