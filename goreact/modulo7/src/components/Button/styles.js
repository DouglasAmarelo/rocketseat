import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button.attrs({ type: 'button'})`
	background: #7159c1;
	border-radius: 4px;
	border: 0;
	color: #fff;
	margin-top: auto;
	overflow: hidden;
	transition: background .2s;

	&:hover { background: ${darken(.05, '#7159c1')}; }

	&,
	div {
		align-items: center;
		display: flex;
	}

	div {
		background-color: rgba(0, 0, 0, .1);
		padding: 12px;
	}
`;