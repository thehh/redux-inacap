module.exports = {
  entry: './app/components/index.jsx',
  output: {
    path: './public/',
    filename: "build.js",
  },
  module: {
    loaders: [
    { test: /\.css$/,  loader: "style-loader!css-loader" },
  { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
  { test: /\.gif$/, loader: "url-loader?mimetype=image/png" },
  { test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, loader: "url-loader?mimetype=application/font-woff" },
  { test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, loader: "file-loader?name=[name].[ext]" },

      {
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
