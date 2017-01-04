module.exports = function(grunt) {
    
    grunt.initConfig({
        mocha: {
            all : {
                src: ['index.html'],
                options : {
                    run: true
                }
            }
        },
        jshint: {
            all: ['spec.js'],
            options : {
                curly: true
            }
        }, 
        watch: {
            files: ['spec.js'],
            tasks: ['jshint', 'mocha']
        }


    });

    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch')

    grunt.registerTask('default', ['jshint','test']);
    grunt.registerTask('test', ['mocha']);
};
