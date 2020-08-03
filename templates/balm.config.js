/* eslint-env node */
const config = require('./config/balmrc');
const publish = require('./config/balm.publish');

const api = (mix) => {
  if (mix.env.isProd) {
    // For test data
    mix.copy('./app/data/*', './dist/api');
  }

  publish(mix);
};

module.exports = () => {
  return {
    config,
    api
  };
};
