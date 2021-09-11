const path = require('path')// 引入path模块
const webpack = require('webpack')
function resolve (dir) {
  return path.join(__dirname, dir)// path.join(__dirname)设置绝对路径
}

module.exports = {
  runtimeCompiler: true,
  publicPath: './',
  chainWebpack: (config) => {
    config
      .resolve.alias
      // set第一个参数：设置的别名，第二个参数：设置的路径
      .set('@', resolve('./src'))// 根据目录的层级来决定，也可以自行设
      .set('components', resolve('./src/components'))
      // .set('views', resolve('./src/views'))
      .set('assets', resolve('./src/assets'))
    config.externals({
      vue: 'Vue',
      vuex: 'Vuex',
      axios: 'axios',
      bootstrap: 'bootstrap'
    })
  },
  configureWebpack: {
    // 支持jquery
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ]
  }
}
