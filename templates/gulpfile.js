/*eslint-env node*/
const balm = require('balm');
const config = require('./config/balmrc');
const templates = require('./config/publish');

balm.config = config;

balm.go(mix => {
  if (mix.env.isProd) {
    // For test data
    mix.copy('./app/data/*', './dist/data');

    // Publish assets
    mix.publish();
    // Publish templates
    mix.publish(templates);
  }
});
