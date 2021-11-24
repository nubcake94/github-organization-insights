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
								login
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

	async getAssignedPullRequests(githubToken: GithubToken, repositoryLogin: string) {
		const query = gql`
			query getAssignedPullRequests($login: String!) {
				viewer {
					repository(login: $login) {
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
			login: repositoryLogin,
		});

		const pullRequests = data?.viewer?.reposiotry?.pullRequests;
		console.log(pullRequests);

		return pullRequests ?? [];
	}
}
