grunt.initConfig({
  respimg: {
    default: {
      options: {
        widths: [200, 400]
      },
      files: [{
        expand: true,
        cwd: 'src/img/',
        src: ['**.{gif,jpg,png,svg}'],
        dest: 'build/img/'
      }]
    }
  },
});
grunt.loadNpmTasks('grunt-respimg');