module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            compilar: {
                expand: true,
                cwd: 'assets/scss',
                src: ['*.scss'],
                dest: 'static/css',
                ext: '.css'
            },
            options: {
                style: 'compressed'
            }
        },
        watch:{
            sass: {
                files: 'assets/scss/*.scss',
                tasks: 'sass:compilar'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

};