const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    // app.use(
    //     '/api',
    //     createProxyMiddleware({
    //         target: 'http://193.164.149.115:8099/moex-datashop-profileservice/',
    //         changeOrigin: true,
    //     })
    // );

    // app.use(
    //     '/api2',
    //     createProxyMiddleware({
    //       target: 'http://193.164.149.115:8099/moex-datashop-profileservice/',
    //       changeOrigin: true,
    //     })
    // );

  app.use(
      createProxyMiddleware('/api1', {
        target: 'http://193.164.149.115:8099/moex-datashop-profileservice/', // API endpoint 1
        changeOrigin: true,
        pathRewrite: {
          "^/api1": "",
        },
        headers: {
          Connection: "keep-alive"
        }
      })
  );
  app.use(
      createProxyMiddleware('/api2', {
        target: 'http://193.164.149.115:8099/moex-datashop-profileservice/', // API endpoint 2
        changeOrigin: true,
        pathRewrite: {
          "^/api2": "",
        },
        headers: {
          Connection: "keep-alive"
        }
      })
  );
};
