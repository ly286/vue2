const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
      port: 7070
  },
    //设置title
    chainWebpack: config => {
       config.plugin('html')
           .tap(args => {
               args[0].title = '农作物健康成长系统'
               return args
           })
    }
})
