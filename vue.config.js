//const { defineConfig } = require('@vue/cli-service');
module.exports = {
  //transpileDependencies: true,
  lintOnSave: false,
  //代理跨域
  devServer:{
    proxy:{
      '/api':{
        target: 'http://gmall-h5-api.atguigu.cn',
        pathRewrite: { '^/api': '' },
        changeOrigin: true
      },
    },
  },
};
