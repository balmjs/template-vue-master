var balm = require('balm');

module.exports = {
  server: {
    open: true,
    proxyTable: {
      '/api': {
        target: 'http://your.project.dev',
        changeOrigin: true
      }
    },
    historyApiFallback: true // For vue-router `mode: 'history'`
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
      'not ie < 9'
    ]
  },
  scripts: {
    entry: {
      lib: ['vue', 'vue-router', 'vuex', 'axios'],
      main: './app/scripts/main.js' // Entry js file
    },
    loaders: [{
      test: /\.vue$/,
      loader: 'vue',
      options: {
        esModule: false // For `const MyComponent = () => import('./components/my-component');`
      }
    }],
    alias: {
      'vue$': balm.config.production ? 'vue/dist/vue.min.js' : 'vue/dist/vue.esm.js'
    }
  },
  cache: true,
  assets: {
    publicUrl: '/',
    root: 'assets', // Replace 'assets' to your remote project root
    publicPath: 'public',
    subDir: 'web'
  }
  // More Config
  // https://github.com/balmjs/balm/blob/master/docs/configuration.md
};
