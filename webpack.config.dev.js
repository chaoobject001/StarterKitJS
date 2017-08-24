import webpack from 'webpack';
import path from 'path';

export default {
  debug: true, // enable debug message
  devtool: 'inline-source-map', // sourcemap (for debugging) setting
  noInfo: false, // provide a list of bundled files
  entry: [
    path.resolve(__dirname, 'src/index')  // entry point: index.js
  ],
  // entry point of application
  // __dirname provides full path
  // both __dirname and path package come from node
  target: 'web',
  // other targets incldue: node, electron
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  // Webpack serve build from memory -
  // No physical file generated, simulation only
  // this can be consumed by html page

  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },

  plugins: [],
  // plugin for extra features:
  // hot-reload, catch error, linting-style
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
  // File types to handle (Loaders)
}
