const path = require('path');

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-hexrgba'),
    require('autoprefixer')
]

module.exports = {
  entry: './public/javascripts/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
      before: function(app, server) {
          server._watch('./public/**/*.html')
      },
      contentBase: path.join(__dirname, 'public'),
      hot: true,
      port: 4000,
      host: '0.0.0.0'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader?url=false', {loader: "postcss-loader", options: {postcssOptions: {plugins: postCSSPlugins}}}],
      },
    ],
  },
};