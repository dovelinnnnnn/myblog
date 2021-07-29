<<<<<<< HEAD
const path = require('path')// 引入path模块
const webpack = require('webpack')
function resolve (dir) {
  return path.join(__dirname, dir)// path.join(__dirname)设置绝对路径
}

module.exports = {
  chainWebpack: (config) => {
    config
      .resolve.alias
      // set第一个参数：设置的别名，第二个参数：设置的路径
      .set('@', resolve('./src'))// 根据目录的层级来决定，也可以自行设
      .set('components', resolve('./src/components'))
      // .set('views', resolve('./src/views'))
      .set('assets', resolve('./src/assets'))
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
=======
const webpack = require('webpack')
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave:false,
    publicPath:'./',
    assetsDir:'public',
    productionSourceMap:false,
    chainWebpack: (config) =>{
        config.resolve.alias
            .set('@',resolve('src'))
            .set('views',resolve('src/views'))
            .set('components',resolve('src/components'))
            .set('assets',resolve('src/assets'))
            .set('public',resolve('public'))
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper','default']
            })
        ]
    },
    pluginOptions: {
        'style-resources-loader': {
          preProcessor: 'sass',
          patterns: [
            path.resolve('src/assets/css/*.scss')      //你的.scss文件所在目录
          ]
        }
    }
>>>>>>> a1d62548bf32d466656040a0d3522c3db0d1525b
}
