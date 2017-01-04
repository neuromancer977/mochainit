module.exports = function(grunt) {
    
    grunt.initConfig({
        mocha: {
            all : {
                src: ['index.html'],
                options : {
                    run: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-mocha');

    grunt.registerTask('default', ['test']);
    grunt.registerTask('test', ['mocha']);
};
