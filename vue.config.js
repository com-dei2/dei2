const htmlWebpackPlugin = require('html-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      // new htmlWebpackPlugin({
      //   minify: {
      //     removeAttributeQuotes: true,
      //     removeComments: true, // 移除HTML中的注释
      //     collapseWhitespace: true, // 删除空白符与换行符
      //     minifyCSS: true,// 压缩内联css
      //     minifyJS: true,
      //     collapseBooleanAttributes: true,
      //     removeCommentsFromCDATA: true, // 从脚本和样式删除的注释 默认false
      //     removeScriptTypeAttributes: true, // 删除script的类型属性，在h5下面script的type默认值：text/javascript 默认值false
      //     removeStyleLinkTypeAttributes: true, // 删除style的类型属性， type="text/css" 同上

      //   },
      //   hash: true
      // }),
      new copyWebpackPlugin([
        {
          from: __dirname + '/src/static/',
          to: './'
        }
      ])
    ]
  }
}