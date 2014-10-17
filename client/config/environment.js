/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dearann',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
      'style-src':   "'self' 'unsafe-inline' cdn.ckeditor.com",
      'script-src':  "'self' 'unsafe-eval' 'unsafe-inline' localhost:35729 dearann.dev:35729 cdn.ckeditor.com",
      'connect-src': "'self' ws://localhost:35729 ws://dearann.dev:35729 api.dearann.dev:3000 api.very-geek.com"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.APP.LOG_RESOLVER = false;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = false;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = false;
    ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.APP.ADAPTER_HOST = 'http://api.dearann.dev:3000';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.ADAPTER_HOST = 'http://api.very-geek.com';
  }

  return ENV;
};
