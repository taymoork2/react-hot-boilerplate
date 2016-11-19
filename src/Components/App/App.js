import React, { Component } from 'react';
import './assets/App.css'

export default class App extends Component {
  render() {
    return (
      <div className="GettingStarted">
        <p className="App-intro">
          To get started, and to edit this component go to <code>src/Components/App/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          Modify Routes at <code>src/Components/Routes.js</code> and save to reload.
        </p>
        <p className="App-intro">
          Modify the Layout at <code>src/Components/Layout/Layout.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
