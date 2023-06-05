const path = require('path');
const { defineConfig } = require('@vue/cli-service')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  runtimeCompiler: true,
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: (config)=>{
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets',resolve('src/assets'))
      .set('components',resolve('src/components'))
      .set('layout',resolve('src/layout'))
      .set('base',resolve('src/base'))
      .set('static',resolve('src/static'))
  },
  devServer: {
    port: 3000
  }
})
