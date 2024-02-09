module.exports = {
  devServer: {
    proxy: {
      '/api1': {
        target: 'http://193.164.149.115:8099/moex-datashop-profileservice/',
        changeOrigin: true,
        secure: false,
      },
      '/api2': {
        target: 'http://193.164.149.115:8095/moex-datashop-datashopservice',
        changeOrigin: true,
        secure: false,
      },
    },
  },
}
