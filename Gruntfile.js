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
        width: 110,
            name: "small",
            quality: 40
          },{
            width: 220,
            quality: 100
          },{
            width: 330,
            name: "large",
            quality: 80
          },{
            width: 660,
            name: "large",
            suffix: "_x2",  // retina gfx
            quality: 50
          },{
            createNoScaledImage: true,
            width: 1660,
            name: "largest",
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
          expand: true,
          src: 'images/fixed/*.{gif,jpg,png}',
          dest: 'build/img/'
        }]
      },
    },
  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
