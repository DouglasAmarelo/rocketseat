import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 30px;
`;

export const Repository = styled.div`
	background-color: #fff;
	border-radius: 3px;
	box-shadow: 0 3px 5px rgba(0, 0, 0, .25);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 10px;
	width: 250px;
	transition: transform .3s ease;

	&:hover {
		box-shadow: 0 8px 10px rgba(0, 0, 0, .25);
		transform: scale(1.03);
	}

	header {
		align-items: center;
		display: flex;
		flex-direction: column;
		padding: 30px;

		img { width: 64px; }

		strong {
			display: block;
			font-size: 22px;
			margin-top: 10px;
			text-align: center;
		}

		small {
			color: #777;
			font-size: 12px;

			a {
				color: #777;

				&:hover { color: #6dd0a7; }
			}
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

	.flex {
		border-top: 1px solid #e7e7e7;
		justify-content: space-between;
		margin-top: 1em;
		padding: 1em .5em;
	}

	button {
		border: 0;
		color: #fff;
		cursor: pointer;
		font-size: 12px;
		height: 35px;
		margin: 0 .5em;
		padding: .5em .2em;
		width: 50%;

		&.remove-item {
			background-color: #e25757;

			&:hover { background: #d03434; }
		}

		&.update-item {
			background-color: #6dd0a7;

			&:hover { background: #67c19b; }
		}

		i {
			font-size: 16px;
			display: inline-block;
			margin-right: 10px;
		}
	}
`;