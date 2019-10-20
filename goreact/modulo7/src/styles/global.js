import { createGlobalStyle } from 'styled-components';

import Background from '../assets/images/background.svg';

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

	* {
		box-sizing: border-box;
		margin: 0;
		outline: none;
		padding: 0;
	}

	body {
		background: #191920 url(${Background}) no-repeat top center;
		-webkit-font-smoothing: antialiased;
	}

	body,
	input,
	button {
		font: 14px 'Roboto', sans-serif;
	}

	button { cursor: pointer; }

	#root {
		margin: 0 auto;
		max-width: 1020px;
		padding: 0 20px 50px 20px;
		width: 90%;
	}
`;

export default GlobalStyle
