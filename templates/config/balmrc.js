// Documentation - http://balmjs.com/docs/en/configuration/toc.html
// 中文文档 - http://balmjs.com/docs/zh-cn/configuration/toc.html
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  server: {
    open: true,
    proxyContext: '/api',
    proxyOptions: {
      target: 'http://your.project.dev', // Target host
      changeOrigin: true // Needed for virtual hosted sites
    },
    historyOptions: true // For vue-router `mode: 'history'`
  },
  roots: {
    source: 'app'
  },
  paths: {
    source: {
      css: 'styles',
      js: 'scripts'
    }
  },
  styles: {
    ext: 'scss',
    autoprefixer: ['> 1%', 'last 2 versions', 'not ie <= 8']
  },
  scripts: {
    entry: {
      lib: ['vue', 'vue-router', 'vuex', 'axios'],
      main: './app/scripts/main.js' // Entry js file
    },
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
    plugins: [new VueLoaderPlugin()],
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  cache: true,
  assets: {
    publicUrl: '/',
    root: 'assets', // Replace 'assets' to your remote project root
    mainDir: 'public',
    subDir: 'web'
  }
  // More Config
};
