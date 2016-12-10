import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

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

  render() {
    const intro = {
      fontSize: 'large',
    };

    return (
      <div className="Counter">
        <h4>Counter: {this.state.counter}</h4>
        <p style={intro}>
          To modify this component, edit
          <code> src/Components/Counter/Counter.js </code>
          and save to reload.
        </p>
      </div>
    );
  }
}
