import styled from 'styled-components';


export const Container = styled.div `
	align-items: center;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	margin: 0 auto;
	max-width: 95%;
	padding: 60px 0;
	width: 100%;

	h1 {
		color: #fff;
		display: block;
		font-size: 36px;
	}
`;

export const ExampleList = styled.ul`
	align-items: center;
	display: flex;
	list-style: none;
	margin: 1em 0 0 0;
	padding: 0;

	&:before {
		color: #fff;
		content: 'Exemplos: ';
		display: block;
		font-size: 18px;
		font-weight: bold;
	}

	li {
		background-color: #fff;
		border-radius: 4px;
		font-size: 14px;
		margin: .5em;
		padding: .5em 1em;
	}
`;

export const Form = styled.form `
	display: flex;
	flex-wrap: wrap;
	margin-top: 20px;
	max-width: 550px;
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
		border: ${props => (props.withError ? '2px solid #f00' : 0 )};
		color: #444;
		flex: 1;
		font-size: 18px;
	}

	button {
		background: #6dd0a7;
		color: #fff;
		font-size: 20px;
		font-weight: bold;
		margin-left: 10px;
		width: 80px;

		&:hover { background: #67c19b; }
	}
`;