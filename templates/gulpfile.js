const balm = require('balm');
const config = require('./config/balmrc');
const templates = require('./config/publish');

balm.config = config;

balm.go(mix => {
  if (balm.config.isProd) {
    // For test data
    mix.copy('./app/data/*', './dist/data');

    // Publish assets
    mix.publish();
    // Publish templates
    Object.keys(templates).forEach(key => {
      mix.publish(key, templates[key].target, templates[key].option || {});
    });
  }
});
