'use strict';

module.exports = function(config) {
  config.set({

    // Base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',

    // Frameworks to use
    frameworks: ['jasmine'],

    // List of files / patterns to load in the browser
    files: [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-bootstrap/ui-bootstrap.js',
        'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
        'bower_components/angular-translate/angular-translate.js',
        'bower_components/angular-dynamic-locale/dist/tmhDynamicLocale.min.js',
        'bower_components/kendo-ui-core/js/kendo.ui.core.min.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'bower_components/eis-web-core/dist/core.js',

        // Mocks
        'bower_components/angular-mocks/angular-mocks.js',

        // App files
        'app.js',
        'controllers/dashboard.js',
        'controllers/global_header.js',
        'routes.js',

        // Tests
        'test/unit/*.js'
    ],

    // List of files to exclude
    exclude: [],

    // Preprocess matching files before serving them to the browser
    preprocessors: {
        './!(lib)/*.js': ['coverage'],
        './*.js': ['coverage']
    },

    // Test results reporter to use
    reporters: ['progress', 'coverage'],

    // Web server port
    port: 9876,

    // Enable / disable colors in the output (reporters and logs)
    colors: true,

    // Level of logging
    logLevel: config.LOG_INFO,

    // Start these browsers
    browsers: ['Chrome'],

    // Continuous Integration mode
    singleRun: true,

    // Watch mode
    autoWatch: false,

    // Coverage configuration
    coverageReporter: {
        type: 'html',
        dir: 'coverage/karma'
    }
  });
};
