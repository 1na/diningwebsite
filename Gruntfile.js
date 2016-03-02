module.exports = function(grunt) {

    grunt.initConfig({
      respimg: {
        default: {
          options: {
            widths: [200, 400]
          },
          files: [{
            expand: true,
            cwd: 'image/',
            src: ['**.{gif,jpg,png,svg}'],
            dest: 'build/img/'
          }]
        }
      },
    });
    grunt.loadNpmTasks('grunt-respimg');
    grunt.registerTask('default', ['respimg']);
};