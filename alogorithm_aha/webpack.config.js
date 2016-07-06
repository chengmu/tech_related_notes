module.exports = {
  entry: {
    sort : './src/sort.js',
    ds : './src/ds.js',
    es6 : './src/es6.js'
  },
  output: {
    path: './chps',
    filename: '[name].js',
    publicPath : '/chps/',
    pathInfo : true
  },
  module: {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
  }
};

