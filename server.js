var express = require('express');
var path = require('path');
var app = express();
var pe = require('pretty-error').start();
var bs = require('browser-sync').create();
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.development.config');
var webpackBundler = webpack(webpackConfig);

app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(webpackHotMiddleware(webpackBundler));
app.use(webpackDevMiddleware(webpackBundler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: false,
  stats: {
    colors: true,
    version: false,
    timings: false,
    chunks: false,
    chunkModules: false
  },
  historyApiFallback: true
}));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000, function (err) {
  if (err) {
    return console.error(err);
  }

  bs.init(null, {
    proxy: 'localhost:3000',
    files: 'public/index.html',
    reloadOnRestart: true,
    injectChanges: true,
    notify: true,
    tunnel: true, // LocalTunnel url, change 'true' to whatever subdomain you like (if subdomain is available)
    open: false, // Change to 'local' to open on start
    xip: true
  });
});
