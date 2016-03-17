/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 375,
            quality: 30
          },{
            width: 800,
            quality: 30
          },{
            width: 2000,
            suffix: "_x2",  // retina gfx
            quality: 30
          },{
            width: 2000,
            quality: 50
            },{
            width: 4000,
            quality: 50
            }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images/',
          dest: 'build/img/'
        }]
      }
    },
    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['build/img'],
      },
    },
    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['build/img']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: false,
          src: 'images/fixed/*.{gif,jpg,png}',
          dest: 'build/img/'
        }]
      },
    },
    
    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy2: {
      dev: {
        files: [{
          expand: false,
          src: 'build/compressed/*.{gif,jpg,png}',
          dest: 'build/img/'
        }]
      },
    },
 
  imagemin: {
      png: {
          options: {
              optimizationLevel: 7
          },
          files: [{
              // Set to true to enable the following options…
              expand: true,
              // cwd is 'current working directory'
              cwd: 'build/img/',
              src: ['**/*.png'],
              // Could also match cwd line above. i.e. project-directory/img/
              dest: 'build/compressed/',
              ext: '.png'
          }]
      },
      jpg: {
          options: {
              progressive: true
          },
          files: [{
              // Set to true to enable the following options…
              expand: true,
              // cwd is 'current working directory'
              cwd: 'build/img/',
              src: ['**/*.jpg'],
              // Could also match cwd. i.e. project-directory/img/
              dest: 'build/compressed/',
              ext: '.jpg'
          }]
      }
  },
  criticalcss: {
    custom: {
      options: {
            url: "http://localhost:4000",
            width: 1200,
            height: 900,
            outputfile: "_includes/_critical.html",
            filename: "_site/style.css", // Using path.resolve( path.join( ... ) ) is a good idea here
            buffer: 800*1024,
            ignoreConsole: false
      }
    }
  }
  });
  grunt.loadNpmTasks('grunt-criticalcss');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images', 'imagemin', 'clean', 'copy2', 'criticalcss' ]);

};
