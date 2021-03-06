import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FavoriteActions from '../../store/actions/favorites';

class Main extends Component {
	static propTypes = {
		addFavoriteRequest: PropTypes.func.isRequired,
		favorites: PropTypes.shape({
			loading: PropTypes.bool,
			data: PropTypes.arrayOf(PropTypes.shape({
				id: PropTypes.number,
				name: PropTypes.string,
				description: PropTypes.string,
				url: PropTypes.string,
			}))
		}).isRequired
	};

	state = {
		repositoryInput: ''
	};

	handleRepository = (e) => {
		e.preventDefault();

		this.props.addFavoriteRequest(this.state.repositoryInput);
		this.setState({ repositoryInput: '' });
	};

	render() {
		return (
			<>
				<form onSubmit={this.handleRepository}>
					<input
						placeholder="usuário/repositório"
						type="text"
						value={this.state.repositoryInput}
						onChange={e => this.setState({ repositoryInput: e.target.value })}
					/>
					<button type="submit">Adicionar</button>

					{this.props.favorites.loading && (<span>Carregando...</span>)}
				</form>

				<ul>
					{this.props.favorites.data.map(favorite => (
						<li key={favorite.id}>
							<p>
								<strong>{favorite.name}</strong> ({favorite.description})
							</p>
							<a href={favorite.url}>Acessar</a>
						</li>
					))}
				</ul>
			</>
		);
	};
};

const mapStateToProps = state => ({
	favorites: state.favorites
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators(FavoriteActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);