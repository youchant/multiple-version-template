
'use strict';

module.exports = function (grunt) {

    var options = require('./www/product/build/config.js');

    grunt.initConfig({
        veronica: options
    });

    grunt.loadNpmTasks('grunt-veronica');

    grunt.registerTask('default', ['veronica']);
};
