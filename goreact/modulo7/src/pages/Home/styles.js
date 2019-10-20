import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
	display: grid;
	grid-gap: 20px;
	grid-template-columns: repeat(3, 1fr);
	list-style: none;
`;

export const ProductCard = styled.li`
	background-color: #fff;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	padding: 20px;

	img {
		align-self: center;
		display: block;
		max-width: 250px;
	}
`;

export const ProductTitle = styled.strong`
	color: #333;
	display: block;
	font-size: 16px;
	line-height: 20px;
	margin-top: 5px;
`;

export const ProductPrice = styled.span`
	display: block;
	font-size: 21px;
	font-weight: bold;
	margin: 5px 0 20px 0;
`;

export const ProductAddToCart = styled.button.attrs({ type: 'button' })`
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

	svg {
		display: block;
		margin-right: 5px;
	}

	span {
		flex: 1;
		font-weight: bold;
		text-align: center;
		text-transform: uppercase;
	}
`;