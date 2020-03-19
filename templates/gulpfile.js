/* eslint-env node */
const balm = require('balm');
const config = require('./config/balmrc');
const publish = require('./config/publish');

balm.config = config;

balm.go(mix => {
  if (mix.env.isProd) {
    // For test data
    mix.copy('./app/data/*', './dist/api');
  }

  publish(mix);
});
