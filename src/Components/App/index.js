import React from 'react';
import './assets/App.css';

// Pure functions can be written as this
export default function App() {
  return (
    <div className="GettingStarted">
      <p className="App-intro">
        To modify this component, go to
        <code> src/Components/App/index.js </code>
        , edit and save to see the changes
      </p>
      <p className="App-intro">
        Modify the Layout at
        <code> src/Containers/Layout/index.js </code>
        and save to see the changes
      </p>
      <p className="App-intro">
        Modify Routes at
        <code> src/Components/routes.js </code>
        and save and reload
      </p>
    </div>
  );
}
