react-hot-boilerplate
=====================

#### This fork is a semi-opiniated React setup with a option to build for Production (React + React-Router + HMR(3) + Webpack + Babel)

This fork combines the minimalism of Gaearon's react-hot-boilerplate/next and the many features of Facebook Incubator's Create-React-App setup into a simple react starter project

### Usage

```
npm install
npm start
open http://localhost:3000
```

Now edit `src/Components/App/App.js`.
Your changes will appear without reloading the browser like in [this video](http://vimeo.com/100010922).

### Linting

This boilerplate project includes React-friendly ESLint configuration.

```
npm run lint
```

### Build to Production

This boilerplate project also includes the ability to export to a production build
- This functionality was taken from React-Scripts

```
npm run build
```

### Using `0.0.0.0` as Host

You may want to change the host in `server.js` and `webpack.config.js` from `localhost` to `0.0.0.0` to allow access from same WiFi network. This is not enabled by default because it is reported to cause problems on Windows. This may also be useful if you're using a VM.

### Dependencies

* React
* React-Router (v3)
* Webpack
* Browser-Sync
* Files from Create-React-App/React-Scripts
* npm-install-webpack-plugin for automatic installation of missing npm packages
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)

### Resources

* [Demo video](http://vimeo.com/100010922)
* [react-hot-loader on Github](https://github.com/gaearon/react-hot-loader)
* [Integrating JSX live reload into your workflow](http://gaearon.github.io/react-hot-loader/getstarted/)
* [Troubleshooting guide](https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md)
* Ping dan_abramov on Twitter or #reactjs IRC

#### What was combined

- A majority of React-Hot-Boilerplate/next is still here
- src folder contents were replaced with Create-React-App's src folder and then organized
- Webpack is a combintation of both React-Hot-Boilerplate and Create-React-App
- Thanks to Create-React-App, css changes are also done over Hot-Module
- App.js file was twekaed to be "hot"
- config contents were taken from React-Scripts and tweaked for new folder structure
- Production build capabilities was taken from React-Scripts
- public folder was taken from React-Scripts
- Server.js was modified to use browser-sync

