import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

class Button extends Component {
	render() {
		return (
			<a href="#" onClick={this.props.onClick} title={this.props.text}>{this.props.children}</a>
		);
	};
};

Button.defaultProps = {
	children: 'Salvar'
}

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	children: PropTypes.string
}

class App extends Component {
	handleClick() {
		alert('Opa');
	};

	render() {
		return (
			<>
				<h1>Hello World</h1>
				<Button onClick={() => alert('Eita!')}></Button>
				<br />
				<Button text="Opa" onClick={this.handleClick}>Link aqui</Button>
			</>
		);
	};
};

render(<App />, document.querySelector('#app'));
