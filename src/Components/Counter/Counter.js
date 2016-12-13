import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  // Copied over from React-Hot-Boilerplate
  // So this.bind will stay as an example of ES% and ES6 playing nicely
  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  // no need for setting up this.bind with ES6
  reset = () => {
    this.setState({
      counter: 0,
    });
  }

  render() {
    const button = {
      backgroundColor: '#79bbff',
      MozBorderRadius: '28px',
      WebkitBorderRadius: '28px',
      borderRadius: '28px',
      display: 'inline-block',
      cursor: 'pointer',
      color: '#ffffff',
      padding: '1em 2em',
      textDecoration: 'none',
      border: 'none',
    };

    return (
      <div className="Counter">
        <h4>Counter: {this.state.counter}</h4>
        <button onClick={this.reset} style={button}>RESET</button>
        <p style={{ fontSize: 'large' }}>
          To modify this component, edit
          <code> src/Components/Counter/Counter.js </code>
          and save to reload.
        </p>
      </div>
    );
  }
}
