const merge = require('webpack-merge')

const base = {
  entry: ['./src/client'],
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public`,
    publicPath: '/'
  },
  plugins: [],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports = merge(base, require('./config/webpack/prod.config'))
} else {
  module.exports = merge(base, require('./config/webpack/dev.config'))
}
