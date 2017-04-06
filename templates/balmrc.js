module.exports = {
  proxyTable: {
    '/api': {
      target: 'http://your.project.dev',
      changeOrigin: true
    }
  },
  entry: {
    vue: ['vue', 'vue-router', 'vuex', 'axios'],
    main: './app/js/main.js' // entry js file
  },
  vendors: ['vue'],
  assets: {
    root: 'assets', // replace 'assets' to your remote project root
    publicPath: 'public'
  },
  publish: {
    'index.html': {
      target: 'views', // replace 'views' to your remote project views path
      option: {
        basename: 'index',
        extname: '.php'
      }
    }
  }
};
