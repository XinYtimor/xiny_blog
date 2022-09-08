//开发环境
// 不需要压缩代码
// 需要热更新
// css不需要提取到css文件
// sourceMap
// ...

const { merge } = require('webpack-merge')
const webpackConfig = require('./webpack.config')
const webpack = require('webpack')
module.exports = merge(webpackConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      //css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      //sass
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      //less
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
          'postcss-loader',
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: ['autoprefixer'],
          //     },
          //   },
          // },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
})
