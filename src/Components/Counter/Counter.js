import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.interval = setTimeout(this.props.onIncrement, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="Counter">
        <h4>Counter: {this.props.value}</h4>
        <button onClick={this.props.onIncrement}>+</button>
        <button onClick={this.props.onDecrement}>-</button>
        <p style={{ fontSize: 'large' }}>To modify this component, edit <code>src/Components/Counter/Counter.js</code> and save to reload.</p>
      </div>
    );
  }
}
