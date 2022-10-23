module.exports = {
    entry: {
      index: './src/index.js',
      details: './src/details.js',
      generate: './src/generate.js',
    },
    output: {
      filename: '[name].js',
      path: __dirname + '/dist',
    },
  };