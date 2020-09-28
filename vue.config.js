const webpack = require('webpack')
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
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
}
