import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
	align-items: center;
	display: flex;
	justify-content: space-between;
	margin: 50px 0;
`;

export const Cart = styled(Link)`
	align-items: center;
	display: flex;
	text-decoration: none;
	transition: opacity .2s;

	&:hover { opacity: .7; }

	div {
		margin-right: 10px;
		text-align: right;
	}

	strong {
		display: block;
		color: #fff;
	}

	span {
		color: #999;
		font-size: 12px;
	}
`;