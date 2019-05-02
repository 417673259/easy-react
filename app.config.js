module.exports = {
  entry: {
    app: [
      './src/client/style/comm.css',
      './src/client/style/reset.css',
      './src/client/App.jsx'
    ]
  },
  appName: 'my-react',
  productionPublicPath: 'http://static.jjsing.com/',
  port: 3000,
  proxy: {
    '/api': 'http://localhost:8888'
  }
}