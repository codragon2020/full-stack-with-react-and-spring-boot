import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

class Counter extends Component {

    //Define the initial state in a constructor
    constructor() {
        super();
        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this);
    }

	render() {
		return (
			<div className="firstComponent">
				<button onClick={this.increment}>+{this.props.by}</button>
				<span className="count">{this.state.counter}</span>
			</div>
		);
	}

    increment() {
        //console.log('increment');
        this.setState({
            counter: this.state.counter + this.props.by
        })
    }
}

Counter.defaultProps = {
    by : 1
}

//Ensure that the Counter prop will be a number
Counter.propTypes = {
    by : PropTypes.number
}

export default Counter;
