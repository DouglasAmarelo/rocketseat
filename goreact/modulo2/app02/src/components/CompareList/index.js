import React from 'react';
import PropTypes from 'prop-types';
import { Container, Repository } from './styles';

const CompareList = ({ repositories, removeItemFromList, updateData, loadingUpdate }) => (
	<Container>
		{
			repositories.map((repository, repositoryIndex) => (
				<Repository key={repository.id}>
					<div>
						<header>
							<img src={repository.owner.avatar_url} alt={repository.owner.login} />
							<strong>{repository.name}</strong>
							<small>
								<a
									href={`https://github.com/${repository.owner.login}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									@{repository.owner.login}
								</a>
							</small>
						</header>

						<ul>
							<li>
								<strong>{repository.stargazers_count}</strong>
								<small>stars</small>
							</li>
							<li>
								<strong>{repository.forks_count}</strong>
								<small>forks</small>
							</li>
							<li>
								<strong>{repository.open_issues_count}</strong>
								<small>issues</small>
							</li>
							<li>
								<strong>{repository.lastCommit}</strong>
								<small>last commit</small>
							</li>
						</ul>
					</div>

					<div className="flex">
						<button
							className="remove-item"
							title="Remove from comparison"
							onClick={() => removeItemFromList(repositoryIndex)}
						>
							<i className="fa fa-trash-o"></i>
							Remove
						</button>

						<button
							className="update-item"
							title="Sync data"
							onClick={() => updateData(repositoryIndex, repository.full_name)}
						>
							{ loadingUpdate >= 0 && loadingUpdate === repositoryIndex ? (
								<i className="fa fa-spinner fa-pulse"></i>
							) : (
								<i className="fa fa-refresh"></i>
							) }
							Sync data
						</button>
					</div>
				</Repository>
			))
		}
	</Container>
);

CompareList.propTypes = {
	repositories: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		owner: PropTypes.shape({
			login: PropTypes.string,
			avatar_url: PropTypes.string
		}),
		stargazers_count: PropTypes.number,
		forks_count: PropTypes.number,
		open_issues_count: PropTypes.number,
		lastCommit: PropTypes.date
	})).isRequired
};

export default CompareList;