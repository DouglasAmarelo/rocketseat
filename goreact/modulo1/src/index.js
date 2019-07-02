import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from './Button';
import './style.scss';

class App extends Component {
	state = {
		counter: 0
	}

	handleClick = () => {
		this.setState({ counter: this.state.counter + 1 });
	};

	render() {
		return (
			<>
				<h1>Hello World </h1>
				<p><strong>{this.state.counter}</strong></p>
				<br />
				<Button text="Opa" onClick={this.handleClick}>Somar</Button>
			</>
		);
	};
};

render(<App />, document.querySelector('#app'));
