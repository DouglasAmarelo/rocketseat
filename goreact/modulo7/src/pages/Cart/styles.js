import styled from 'styled-components';

export const Container = styled.div`
	background-color: #fff;
	border-radius: 4px;
	padding: 30px;
`;

export const ProductTable = styled.table`
	width: 100%;

	th {
		color: #999;
		padding: 12px;
		text-align: left;
	}

	td {
		border-bottom: 1px solid #eee;
		padding: 12px;
		vertical-align: middle;

		img { height: 100px; }

		button {
			background: none;
			border: none;
			display: flex;
			padding: 5px;
		}
	}
`;

export const ProductTitle = styled.strong`
	color: #333;
	display: block;
`;

export const ProductPrice = styled.span`
	display: block;
	font-size: 18px;
	font-weight: bold;
	margin-top: 5px;
`;

export const ProductActions = styled.div`
	align-items: center;
	display: flex;

	input {
		border: 1px solid #ddd;
		border-radius: 4px;
		color: #777;
		padding: 5px;
		width: 50px;
	}
`;

export const ProductTotalCart = styled.footer`
	align-items: center;
	display: flex;
	justify-content: space-between;
	margin-top: 30px;
`;

export const Total = styled.div`
	align-items: baseline;
	display: flex;

	span {
		color: #999;
		font-weight: bold;
	}

	strong {
		display: inline-block;
		font-size: 28px;
		margin-left: 5px;
	}
`;