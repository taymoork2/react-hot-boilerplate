React Hot Boilerplate
=====================

#### This fork is a semi-opiniated React setup with a option to build for Production (React + React-Router v4 + HMR(3) + Webpack + Babel)

This fork combines the minimalism of Gaearon's react-hot-boilerplate/next and the many features of Facebook Incubator's Create-React-App into a simple react starter project with react-router for routing

### Usage

> #### Clone or fork this repo
> ```
> npm install
> npm start
> open http://localhost:3000
> ```
> Now edit `src/Components/App/App.js`.

Your changes will appear without reloading the browser like in [this video](http://vimeo.com/100010922).

### Linting

This boilerplate project includes React-friendly ESLint configuration.

```
npm run lint
```

### Build to Production

This boilerplate project also includes the ability to export to a production build
* This functionality was taken from React-Scripts

```
npm run build
```

### Static Hosting _(Github Pages or Surge)_

* Add the homepage field `"homepage": "username.github.io/{repo}"` to `package.json`
* Doublecheck `public/404.html` - `pathPrefix` value to see if it fits your setup
  * It is currently set to `TRUE` for a Github Pages setup **_even with a custom domain_**


### Using `0.0.0.0` as Host

You may want to change the host in `server.js` and `webpack.config.js` from `localhost` to `0.0.0.0` to allow access from same WiFi network. This is not enabled by default because it is reported to cause problems on Windows. This may also be useful if you're using a VM.
> _You can also change the browserysnc tunnel value in_ `server.js` _from_ `true` _to whatever string you would like. You can then access the localtunnel url on other devices_

### Dependencies

* React
* React-Router (v4)
* Webpack _*(not v2)*_
* React-Helmet
* Browser-Sync
* Flow-Type support out-of-the-box
* Files from [Create-React-App/React-Scripts](https://github.com/facebookincubator/create-react-app)
  * React-Scripts Polyfills
* [npm-install-webpack-plugin](https://github.com/ericclemmons/npm-install-webpack-plugin) for automatic installation of missing npm packages
  * You can ignore the `babel-preset-react-hot-loader/babel` error, the developer of the plugin knows of the [issue](https://github.com/ericclemmons/npm-install-webpack-plugin/issues/61)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)
* [Single Page Apps for GitHub Pages](https://github.com/rafrex/spa-github-pages)

### Resources

* [Demo video](http://vimeo.com/100010922)
* [react-hot-loader on Github](https://github.com/gaearon/react-hot-loader)
* [Integrating JSX live reload into your workflow](http://gaearon.github.io/react-hot-loader/getstarted/)
* [Troubleshooting guide](https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md)
* [Dan Abramov](http://github.com/gaearon)
* [Facebook Incubator](https://github.com/facebookincubator)

#### What was combined

* A majority of React-Hot-Boilerplate/next is still here
* src folder contents were replaced with Create-React-App's src folder and then organized
* Webpack is a combination of both React-Hot-Boilerplate and Create-React-App
* Thanks to Create-React-App, css changes are also done over Hot-Module
* App.js file was tweaked to be "hot"
* config contents were taken from React-Scripts and tweaked for new folder structure
* Production build capabilities was taken from React-Scripts
* public folder was taken from React-Scripts
* Server.js was modified to use browser-sync

#### What needs to be done

* Add test suite
  * _Probably Jest+Enzyme_
* Integrate Redux
  * _Checkout the Redux branch_
