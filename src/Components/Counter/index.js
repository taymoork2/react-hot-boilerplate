import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../../Actions/counter';

export class Counter extends Component {
  static propTypes = {
    value: PropTypes.number,
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
    const { value, onIncrement, onDecrement } = this.props;

    return (
      <div className="Counter">
        <h4>Counter: {value}</h4>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <p style={{ fontSize: 'large' }}>To modify this component, edit <code>src/Components/Counter/index.js</code> and save to see the changes</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
