exports.config = {
    baseUrl: process.env.BASE_URL,
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            args: ['--disable-web-security']
        }
    },
    framework: 'jasmine2',
    specs: [
        './e2e/*.spec.js'
    ],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: true
    },
    allScriptsTimeout: 20000,
    onPrepare: function() {
        browser.driver.manage().window().maximize();
    }
};