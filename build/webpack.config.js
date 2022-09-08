const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 预渲染插件
// const PrerenderSPAPlugin = require('prerender-spa-plugin')
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
module.exports = {
  entry: {
    // 配置入口文件
    main: path.resolve(__dirname, '../src/main.js'),
  },
  output: {
    // 配置打包文件输出的目录
    path: path.resolve(__dirname, '../dist'),
    // 生成的 js 文件名称
    filename: 'js/[name].[contenthash].js',
    // 生成的 chunk 名称
    chunkFilename: 'js/[name].[contenthash].js',
    // 资源引用的路径
    publicPath: '/',
  },
  //当资源为cdn时，需要配置externals
  externals: {
    // 'vue': 'Vue',
    'element-ui': 'ElementUI',
    swiper: 'swiper',
  },
  optimization: {
    moduleIds: 'named',
  },
  //热更新&&配置反向代理

  devServer: {
    hot: 'only',
    port: 8083,
    static: './dist',
    historyApiFallback: true,
    //反向代理
    proxy: {
      '/projectApi': {
        target: 'http://19.131.11.132:8080',
        pathRewrite: { '^/projectApi': '' },
        changeOrigin: true, // target是域名的话，需要这个参数，
        secure: false, // 设置支持https协议的代理
      },
    },
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.esm.js',
      '@': path.resolve(__dirname, '../src'), //引用路径简写
    },
    extensions: ['.js', '.vue', '.json'],
  },
  module: {
    rules: [
      //打包vue
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'cache-loader',
          },
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false,
              },
            },
          },
        ],
      },
      //浏览器兼容性(babel)
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      // //打包图片
      {
        test: /\.(jpe?g|png|gif)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 4kb  指定大小
          },
        },
        generator: {
          filename: 'img/[name].[contenthash:8].[ext]',
        },
      },
      // //打包媒体
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 4kb  指定大小
          },
        },
        generator: {
          filename: 'media/[name].[contenthash:8].[ext]',
        },
      },
      //打包字体
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 4kb  指定大小
          },
        },
        generator: {
          filename: 'fonts/[name].[contenthash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new PrerenderSPAPlugin({
    //   // 生成文件的路径，也可以与webpakc打包的一致。

    //   // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。

    //   staticDir: path.join(__dirname, 'dist'),

    //   // 对应自己的路由文件，比如about有参数，就需要写成 /about/param1。

    //   routes: ['/', '/Home'],

    //   // 必须配置不然不会进行预编译

    //   renderer: new Renderer({
    //     inject: {
    //       foo: 'bar',
    //     },

    //     headless: false,

    //     // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。

    //     renderAfterDocumentEvent: 'render-event',
    //   }),
    // }),
  ],
}
