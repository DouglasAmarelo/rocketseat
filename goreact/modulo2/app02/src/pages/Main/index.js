import React, { Component } from 'react';
import moment from 'moment';
import api from '../../services/api';

import CompareList from '../../components/CompareList';

import { Container, ExampleList, Form } from './styles';

class Main extends Component {
	state = {
		loading: false,
		loadingUpdate: false,
		repositories: [],
		repositoryError: false,
		repositoryInput: '',
		examples: [
			'facebook/react',
			'vuejs/vue',
			'angular/angular',
			'emberjs/ember.js',
			'nodejs/nodejs.org',
			'Polymer/polymer'
		]
	};

	componentDidMount() {
		this.getStorageData();
	};

	// Get reposiories data from GiHub API
	getRepositoryData = (repo) => {
		return api.get(`/repos/${repo}`);
	};

	// Get repositories from Local Storage and set to state
	getStorageData = () => {
		if (typeof(Storage) === 'undefined') {
			return;
		}
		const hasRepositoriesOnLocalStorage = localStorage.getItem('repositories');

		if (hasRepositoriesOnLocalStorage) {
			this.setState({ repositories: JSON.parse(hasRepositoriesOnLocalStorage) });
		}
	};

	// Set repositories to Local Storage
	updateStorageData = (data) => {
		if (typeof(Storage) === 'undefined') {
			return;
		}

		localStorage.setItem('repositories', JSON.stringify(data));
	};

	// Search for repository and print data
	handleAddRepository = async (e) => {
		e.preventDefault();

		this.setState({ loading: true });

		try {
			const { data: repository } = await this.getRepositoryData(this.state.repositoryInput);

			// Format numbers and date before rendering
			this.formatRepositoryData(repository);

			this.setState({
				repositoryInput: '',
				repositories: [...this.state.repositories, repository],
				repositoryError: false
			});

			this.updateStorageData(this.state.repositories);
		}
		catch (error) {
			this.setState({ repositoryError: true });
		}
		finally {
			this.setState({ loading: false });
		}
	};

	// Remove repository from list
	removeItemFromList = (repositoryIndex) => {
		const repositories = [...this.state.repositories];
		repositories.splice(repositoryIndex, 1);

		this.setState({ repositories });
		this.updateStorageData(repositories);
	};

	formatNumber = (num) => {
		num = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
		return Number(num);
	};

	// Format numbers and date before rendering
	formatRepositoryData = (repository) => {
		repository.stargazers_count  = this.formatNumber(repository.stargazers_count);
		repository.watchers_count    = this.formatNumber(repository.watchers_count);
		repository.subscribers_count = this.formatNumber(repository.subscribers_count);
		repository.forks_count       = this.formatNumber(repository.forks_count);
		repository.open_issues_count = this.formatNumber(repository.open_issues_count);
		repository.lastCommit        = moment(repository.pushed_at).fromNow();
	};

	// Update de repositoriy info
	updateData = async (index, repo) => {

		this.setState({ loadingUpdate: index });

		try {
			const { data: repository } = await this.getRepositoryData(repo);

			// Format numbers and date before rendering
			this.formatRepositoryData(repository);

			const repositories = [...this.state.repositories];
			repositories[index] = repository;

			this.setState({ repositories });
			this.updateStorageData(repositories);
		}
		catch (error) {
			this.setState({ repositoryError: true });
		}
		finally {
			setTimeout(() => {
				this.setState({ loadingUpdate: false });
			}, 300);
		}
	};

	tryExample = (repo) => {
		this.setState({ repositoryInput: repo });
	};

	render() {
		const { examples, repositoryError, repositoryInput, repositories, loading, loadingUpdate } = this.state;

		return(
			<Container>
				<h1>Github repositories comparison</h1>
				<Form
					withError={repositoryError}
					onSubmit={this.handleAddRepository}
				>
					<input
						type="text"
						placeholder="usuário/repositório"
						value={repositoryInput}
						onChange={e => this.setState({ repositoryInput: e.target.value })}
					/>

					<button type="submit">
						{ loading ? (
							<i className="fa fa-spinner fa-pulse"></i>
						) : 'OK' }
					</button>
				</Form>

				<ExampleList className="exemplo">
					{examples && (
						examples.map(repo => (
							<li
								key={repo}
								onClick={() => this.tryExample(repo)}
							>
								{repo}
							</li>
						))
					)}
				</ExampleList>

				<CompareList
					loadingUpdate={loadingUpdate}
					removeItemFromList={this.removeItemFromList}
					repositories={repositories}
					updateData={this.updateData}
				/>
			</Container>
		);
	};
};

export default Main;