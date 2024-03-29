const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

// 复用loader
const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  {
    loader:'postcss-loader',
    options:{
      ident:'postcss',
      plugins:() => [
        require('postcss-preset-env')()
      ]
    }
  }
]

module.exports = {
  entry:'./src/js/index.js',
  output:{
    filename:'js/built.js',
    path:resolve(__dirname, 'built')
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[...commonCssLoader]
      },
      {
        test:/\.less$/,
        use:[
          ...commonCssLoader,
          'less-loader'
        ]
      },
      /**
       * 正常来讲一个文件只能被一个loader处理
       * 当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：
       *    先执行eslint 在执行babel
       */
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'eslint-loader',
        // 强制优先执行这个loader
        enforce:'pre',
        options:{
          fix:true
        }
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'babel-loader',
        options:{
          presets:[
            [
              '@babel/preset-env',
              {
                useBuiltIns:'usage',
                corejs:{
                  version:3
                },
                targets:{
                  chrome:'60',
                  firefox:'50'
                }
              }
            ]
          ]
        }
      },
      {
        test:/\.(jpg|png|gif)/,
        loader:'url-loader',
        options:{
          limit:8 * 1024,
          name:'[hash:10].[ext]',
          outputPath:'images'
        }
      },
      {
        test:/\.html$/,
        loader:'html-loader'
      },
      {
        exclude:/\.(js|css|less|html|jpg|png|gif)/,
        loader:'file-loader',
        options:{
          outputPath:'media'
        }
      }
    ]
  },
  plugins:[
    // plugins配置
    new MiniCssExtractPlugin({
      filename:'css/built.css'
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      // 压缩html代码
      minify:{
        // 移除空格
        collapseWhitespace:true,
        // 移除注释
        removeComments:true
      }
    })
  ],
  mode:'production'
}



