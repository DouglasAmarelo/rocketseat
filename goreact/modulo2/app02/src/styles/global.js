import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		-moz-osx-font-smoothing: grayscale!important;
		-webkit-font-smoothing: antialiased!important;
		background: #9b65e6;
		text-rendering: optimizeLegibility!important;
		font-family: sans-serif;
	}

	.flex {
		display: flex;
	}
`;

export default GlobalStyle;