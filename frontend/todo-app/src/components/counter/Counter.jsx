import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

class Counter extends Component {
	constructor() {
		super();
		this.state = {
			counter: 0,
		};
		this.increment = this.increment.bind(this);
	}

	render() {
		return (
			<div className="counter">
				<CounterButton by={1} incrementMethod={this.increment} />
				<CounterButton by={5} incrementMethod={this.increment} />
				<CounterButton by={10} incrementMethod={this.increment} />
				<span className="count">{this.state.counter}</span>
			</div>
		);
	}

	increment(by) {
		//console.log(`increment from parent - ${by}`)
		this.setState((prevState) => {
			return { counter: prevState.counter + by };
		});
	}
}

class CounterButton extends Component {
	//Define the initial state in a constructor
	constructor() {
		super();
		this.state = {
			counter: 0,
		};

		this.increment = this.increment.bind(this);
	}

	render() {
		return (
			<div className="counter">
				<button onClick={this.increment}>+{this.props.by}</button>
			</div>
		);
	}

	increment() {
		this.setState({
			counter: this.state.counter + this.props.by,
		});
		this.props.incrementMethod(this.props.by);
	}
}

CounterButton.defaultProps = {
	by: 1,
};

//Ensure that the CounterButton prop will be a number
CounterButton.propTypes = {
	by: PropTypes.number,
};

export default Counter;
