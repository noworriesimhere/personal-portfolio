const currentTask = process.env.npm_lifecycle_event
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fse = require('fs-extra')

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-hexrgba'),
    require('autoprefixer')
]

class RunAfterCompile {
  apply(compiler) {
    compiler.hooks.done.tap('Copy image', () => {
      fse.copySync('./public/img', './dist/img');
      fse.copySync('./public/video', './dist/video');
    })
  }
}

let cssConfig = {
  test: /\.css$/i,
  use: ['css-loader?url=false', {loader: "postcss-loader", options: {postcssOptions: {plugins: postCSSPlugins}}}],
}

let config = {
  entry: './public/javascripts/index.js',
  plugins: [new HtmlWebpackPlugin({filename: 'index.html', template: './public/index.html'})],
  module: {
    rules: [
      cssConfig
    ],
  }
}

if (currentTask === 'dev') {
  cssConfig.use.unshift('style-loader');
  config.output = {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  }
  config.devServer = {
    before: function(app, server) {
        server._watch('./public/**/*.html')
    },
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    port: 4001,
    host: '0.0.0.0'
  }
  config.mode = 'development'
}

if (currentTask === 'build') {
  config.module.rules.push({
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  })
  cssConfig.use.unshift(MiniCssExtractPlugin.loader);
  postCSSPlugins.push(require('cssnano'));
  config.output = {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  }
  config.mode = 'production'
  config.optimization = {
    splitChunks: {chunks: 'all'}
  }
  config.plugins.push(
    new CleanWebpackPlugin(), 
    new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'}),
    new RunAfterCompile()
    )
}


module.exports = config;