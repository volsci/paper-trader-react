const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('./webpack.config.js');

const app = express();
const compiler = webpack(webpackConfig);

app.use(express.static(path.join(__dirname, '/www')));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

const server = app.listen(3300, () => {
  const host = server.address().address;
  const { port } = server.address();
  console.log('Example app listening at http://%s:%s', host, port);
});
