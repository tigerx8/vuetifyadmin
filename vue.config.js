const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@$": resolve('src/')
      }
    },
    module: {
      rules: [
        //
      ]
    },
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "~@/theme/main.scss"`,
      },
    },
  },
  chainWebpack: config => {
    ["vue-modules", "vue", "normal-modules", "normal"].forEach((match) => {
      config.module.rule('scss').oneOf(match).use('sass-loader')
        .tap(opt => Object.assign(opt, { data: `@import '~@/theme/main.scss';` }))
    })
  },
  runtimeCompiler: true,
  // publicPath: './',
  publicPath: process.env.NODE_ENV === 'production' ?
    '/production-sub-path/' : '/',
  assetsDir: 'static'

}