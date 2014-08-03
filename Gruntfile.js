module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'public/js/main.js',
                dest: 'public/js/main.min.js'
            }
        },
        // Jade template engine
        jade: {
            compile: {
                options: {
                    pretty: true,
                    client: true
                },
                files: [{
                    dest: 'public/js/templates.js',
                    src: 'templates/*.jade',
                    ext: '.js'
                }]
            }
        },
        sass: {
            dist: {
                files: {
                    'public/css/style.css' : 'public/sass/style.scss'
                }
            }
        },
        watch: {
            files: ['templates/*.jade', 'js/*.js', 'public/sass/*.scss'],
            tasks: ['uglify', 'jade', 'sass']
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // Default task(s).
    grunt.registerTask('default', ['uglify', 'jade', 'sass', 'watch']);
};