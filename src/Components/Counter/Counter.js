import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  componentDidMount() {
    this.interval = setTimeout(this.props.onIncrement, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="Counter">
        <h4>Counter: {value}</h4>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <p style={{ fontSize: 'large' }}>To modify this component, edit <code>src/Components/Counter/Counter.js</code> and save to reload.</p>
      </div>
    );
  }
}

Counter.PropTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}
