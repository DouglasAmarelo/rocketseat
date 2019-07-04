import React, { Component } from 'react';
import moment from 'moment';
import api from '../../services/api';

import CompareList from '../../components/CompareList';

import { Container, Form } from './styles';
import logo from '../../assets/logo.png';

class Main extends Component {
	state = {
		repositoryInput: '',
		repositories: [],
	};

	handleAddRepository = async (e) => {
		e.preventDefault();

		try {
			const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);

			repository.lastCommit = moment(repository.pushed_at).fromNow();

			this.setState({
				repositoryInput: '',
				repositories: [...this.state.repositories, repository]
			});
		} catch (error) {
			console.error(error);
		}
	};

	render() {
		return(
			<Container>
				<img src={logo} alt="GitHub Compare"/>
				<Form onSubmit={this.handleAddRepository}>
					<input
						type="text"
						placeholder="usuário/repositório"
						value={this.state.repositoryInput}
						onChange={e => this.setState({ repositoryInput: e.target.value })}
					/>

					<button type="submit">ok</button>
				</Form>

				<CompareList repositories={this.state.repositories} />
			</Container>
		);
	};
};

export default Main;