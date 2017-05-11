var balm = require('balm');
var config = require('./balmrc');

balm.config = {
  server: {
    open: true,
    proxyTable: config.proxyTable,
    historyApiFallback: true
  },
  roots: {
    source: 'app'
  },
  paths: {
    source: {
      css: 'styles',
      js: 'scripts',
      img: 'images'
    }
  },
  styles: {
    ext: 'scss',
    autoprefixer: [
      '> 1%',
      'last 2 versions',
      'not ie <= 8'
    ]
  },
  scripts: {
    entry: config.entry,
    vendors: config.vendors,
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }],
    alias: {
      'vue': balm.config.production ? 'vue/dist/vue.min.js' : 'vue/dist/vue.js'
    }
  },
  cache: true,
  assets: config.assets
};

balm.go(function(mix) {
  if (balm.config.production) {
    // for test
    mix.copy('./app/data/*', './dist/data');

    // for static
    mix.publish();
    // for template
    Object.keys(config.publish).forEach(function(key) {
      mix.publish(key, config.publish[key].target, config.publish[key].option || {});
    });
  }
});
