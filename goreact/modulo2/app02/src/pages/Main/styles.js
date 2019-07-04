import styled from 'styled-components';


export const Container = styled.div `
	align-items: center;
	display: flex;
	flex-direction: column;
	padding-top: 60px;
`;

export const Form = styled.form `
	display: flex;
	margin-top: 20px;
	max-width: 400px;
	width: 100%;

	input,
	button {
		border-radius: 3px;
		border: none;
		height: 55px;
		padding: 0 20px;
	}

	input {
		background: #fff;
		color: #444;
		flex: 1;
		font-size: 18px;
	}

	button {
		background: #63f5b8;
		color: #fff;
		font-size: 20px;
		font-weight: bold;
		margin-left: 10px;

		&:hover { background: #52d89f; }
	}
`;