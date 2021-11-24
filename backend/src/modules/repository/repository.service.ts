import { Injectable, Logger } from '@nestjs/common';
import { gql } from 'graphql-request';
import { GithubToken } from 'src/types/githubToken.type';
import { GithubService } from '../client/github.service';

@Injectable()
export class RepositoryService {
	private logger = new Logger('RepositoryService');

	constructor(private readonly githubService: GithubService) {}

	async getCollaboratedRepositories(githubToken: GithubToken, organizationLogin: string) {
		const query = gql`
			query getCollaboratedRepos($login: String!) {
				viewer {
					organization(login: $login) {
						repositories(first: 100) {
							nodes {
								name
								nameWithOwner
								openGraphImageUrl
								viewerPermission
							}
						}
					}
				}
			}
		`;

		const data = await this.githubService.request.withToken(query, githubToken, {
			login: organizationLogin,
		});

		return data?.viewer?.organization?.repositories?.nodes ?? [];
	}

	async getAssignedPullRequests(githubToken: GithubToken, repositoryName: string) {
		const query = gql`
			query getAssignedPullRequests($name: String!) {
				viewer {
					repository(name: $name) {
						pullRequests(first: 50) {
							createdAt
							number
							title
							body
							editor
							assignees
							comments
							reviewDecision
							reviewRequest
							reviews
						}
					}
				}
			}
		`;

		const data = await this.githubService.request.withToken(query, githubToken, {
			name: repositoryName,
		});

		const pullRequests = data?.viewer?.reposiotry?.pullRequests;
		console.log(pullRequests);

		return pullRequests ?? [];
	}
}
