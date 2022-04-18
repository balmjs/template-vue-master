const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

const workspace = path.join(__dirname, '..');

function resolve(dir) {
  return path.join(workspace, dir);
}

const appRoot = 'app';

// Documentation - https://balm.js.org/docs/config/
// 中文文档 - https://balm.js.org/docs/zh/config/
module.exports = {
  server: {
    // proxyConfig: {
    //   context: '/api',
    //   options: {
    //     target: 'http://your.project.dev', // Target host
    //     changeOrigin: true // Needed for virtual hosted sites
    //   }
    // },
    historyOptions: true // For vue-router `mode: 'history'`
  },
  roots: {
    source: appRoot
  },
  styles: {
    extname: 'scss'
  },
  scripts: {
    entry: {
      lib: ['vue', 'vue-router', 'vuex', 'axios'],
      main: `./${appRoot}/scripts/main.js` // Entry js file
    },
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
    plugins: [new VueLoaderPlugin()],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve(`${appRoot}/scripts`)
    }
  },
  assets: {
    root: 'assets', // Replace 'assets' to your remote project root
    mainDir: 'public',
    subDir: 'web',
    cache: true
  }
  // More Config
};
