import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 50px;
`;

export const Repository = styled.div`
	background-color: #fff;
	border-radius: 3px;
	display: flex;
	flex-direction: column;
	margin: 0 10px;
	width: 250px;

	header {
		align-items: center;
		display: flex;
		flex-direction: column;
		padding: 30px;

		img { width: 64px; }

		strong {
			font-size: 24px;
			margin-top: 10px;
		}

		small {
			color: #777;
			font-size: 14px;
		}
	}

	ul {
		list-style: none;

		li {
			padding: 12px 20px;

			&:nth-child(odd) { background-color: #f5f5f5; }
		}

		small {
			color: #888;
			display: inline-block;
			font-size: 12px;
			font-style: italic;
			padding: 0 5px;
		}
	}
`;