/**
 * Created by Shrimp on 16/7/3.
 */
module.exports = function(grunt) {
    //配置参数
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';',
                stripBanners: true
            },
            dist: {
                src: [
                    "js/**/*.js",
                ],
                dest: "bundle.js"
            }
        },
        uglify: {
            options: {
            },
            dist: {
                files: {
                    'bundle.js': 'bundle.js'
                }
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['concat', 'uglify']);
}