var express = require('express');
var path = require('path');
var webpack = require('webpack');
var browserSync = require('browser-sync').create();

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.development.config');

var app = express();
var webpackBundler = webpack(webpackConfig);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');

  browserSync.init(null, {
    server: {
      baseDir: 'public',
      middleware: [
        webpackDevMiddleware(webpackBundler, {
          publicPath: webpackConfig.output.publicPath,
          noInfo: false,
          stats: {
            colors: true,
            version: false,
            timings: false,
            chunks: false,
            chunkModules: false
          },
          historyApiFallback: false
        }),
        webpackHotMiddleware(webpackBundler)
      ],
    },
    files: [
      'dist/index.html'
    ],
    reloadOnRestart: true,
    notify: true,
    tunnel: true, // LocalTunnel url
    logLevel: 'debug',
    logSnippet: 'false',
    open: false, // Change to 'local' to open on start
    xip: true
  });
});
