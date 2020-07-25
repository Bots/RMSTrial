module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3001/api',
          ws: true,
          changeOrigin: true,
          secure: false
        }
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ],
}