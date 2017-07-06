var balm = require('balm');
var config = require('./config/balmrc');
var templates = require('./config/publish');

balm.config = config;

balm.go(function(mix) {
  if (balm.config.production) {
    // For test data
    mix.copy('./app/data/*', './dist/data');

    // Publish assets
    mix.publish();
    // Publish templates
    Object.keys(templates).forEach(function(key) {
      mix.publish(key, templates[key].target, templates[key].option || {});
    });
  }
});
