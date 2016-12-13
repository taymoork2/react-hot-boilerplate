import React from 'react';
import './assets/App.css';

// Pure functions can be written as this
export default function App() {
  return (
    <div className="GettingStarted">
      <p className="App-intro">
        To get started, and to edit this component go to
        <code> src/Components/App/index.js </code>
        and save to reload.
      </p>
      <p className="App-intro">
        Modify the Layout at
        <code> src/Containers/Layout/index.js </code>
        and save to reload.
      </p>
      <p className="App-intro">
        Modify Routes at
        <code> src/Components/Routes.js </code>
        and save to reload.
      </p>
    </div>
  );
}
