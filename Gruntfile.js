// Generated by CoffeeScript 1.8.0

/** Обязательная обёртка */

(function() {
  module.exports = function(grunt) {

    /** Задачи */
    grunt.initConfig({
      pkg: grunt.file.readJSON("package.json"),
      compass: {
        dev: {
          options: {
            config: 'config.rb',
            sassDir: 'css',
            cssDir: 'css'
          }
        }
      },
      autoprefixer: {
        prefixMe: {
          options: {
            browsers: ["last 6 version", "> 1%", "ie 8"]
          },
          files: {
            'css/style-a.css': ['css/style.css']
          }
        }
      },
      csso: {
        compress: {
          options: {
            report: "min"
          },
          files: {
            "css/style.min.css": ["css/style-a.css"]
          }
        }
      },
      concat: {
        js: {
          src: ["js/source/functions.js"],
          dest: "js/project.js"
        }
      },
      uglify: {
        options: {
          mangle: true,
          compress: false
        },
        js: {
          files: {
            'js/project.min.js': ['<%= concat.js.dest %>']
          }
        }
      },
      svgmin: {
        options: {
          plugins: [
            {
              removeViewBox: false
            }
          ]
        },
        dist: {
          files: [
            {
              expand: true,
              cwd: 'images/svg/svg-no-optimized',
              src: ['**/*.svg'],
              dest: 'images/svg/',
              ext: '.min.svg'
            }
          ]
        }
      },
      watch: {
        compass: {
          files: ['css/**/*.scss'],
          tasks: ['compass', 'autoprefixer', 'csso:compress']
        },
        js: {
          files: ['js/source/**/*.js'],
          tasks: ['newer:concat:js', 'uglify:js']
        }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks("grunt-csso");
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-newer');
    grunt.registerTask('default', ['compass', 'autoprefixer', 'csso:compress', 'concat:js', 'uglify:js', 'watch']);
    grunt.registerTask('start', ['compass', 'autoprefixer', 'csso:compress', 'concat:js', 'uglify:js']);
    grunt.registerTask('css', ['compass', 'autoprefixer', 'csso:compress', 'watch:compass']);
    grunt.registerTask('js', ['concat:js', 'uglify:js', 'watch:js']);
    return grunt.registerTask('svg', ['svgmin']);
  };

}).call(this);
