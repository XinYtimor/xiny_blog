//生产环境
// 压缩代码
// 不需要热更新
// 提取css，压缩css文件
// sourceMap
// 构建前清除上一次构建的内容
// ...

// @intervolga/optimize-cssnano-plugin 用于压缩css代码
// mini-css-extract-plugin 用于提取css到文件中
// clean-webpack-plugin 用于删除上次构建的文件
// webpack-merge 合并 webpack配置
// copy-webpack-plugin 用户拷贝静态资源

const path = require('path')
const { merge } = require('webpack-merge')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin')
/*   clean-webpack-plugin 3.0 以上的版本需要使用对象结构  */
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// 打包 使用gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin')

// 定义压缩文件类型
const productionGzipExtensions = ['js', 'css']

//清除console.log
const TerserPlugin = require('terser-webpack-plugin')

//uglifyjs压缩
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

//模块分析工具  npm install --save-dev webpack-bundle-analyzer
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = merge(webpackConfig, {
  mode: 'production',
  devtool: 'eval-cheap-module-source-map',
  //关闭性能提示
  performance: {
    hints: false,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\\/]node_modules[\\\/]/,
          priority: -10,
          chunks: 'initial',
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      //scss
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ],
      },
      //less
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      //   'process.env': {
      //     NODE_ENV: 'production'
      //   }
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    // 提取css
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    //压缩css
    new OptimizeCssnanoPlugin({
      sourceMap: true,
      cssnanoOptions: {
        preset: [
          'default',
          {
            mergeLonghand: false,
            cssDeclarationSorter: false,
          },
        ],
      },
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../public'),
        to: path.resolve(__dirname, '../dist'),
      },
    ]),
    new CleanWebpackPlugin(),
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'), // 匹配文件名

      threshold: 10240, // 对超过10K的数据进行压缩

      minRatio: 0.8, // 极小比
    }),
    //模块分析工具
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
    //清除console.log
    new TerserPlugin({
      terserOptions: {
        ecma: undefined,
        warnings: false,
        parse: {},
        compress: {
          drop_console: true,
          drop_debugger: false,
          pure_funcs: ['console.log'], // 移除console
        },
      },
    }),
    //uglifyjs压缩
    new UglifyJsPlugin(),
  ],
})
