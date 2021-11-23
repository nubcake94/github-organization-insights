import { Injectable, Logger } from '@nestjs/common';
import { gql } from 'graphql-request';
import { GithubToken } from 'src/types/githubToken.type';
import { GithubService } from '../client/github.service';

@Injectable()
export class OrganizationService {
	private logger = new Logger('OrganizationService');

	constructor(private readonly githubService: GithubService) {}

	async getCollaboratedRepositories(githubToken: GithubToken, organizationLogin: string) {
		const query = gql`
			query getCollaboratedRepos($login: String!) {
				viewer {
					organization(login: $login) {
						repositories(first: 100) {
							nodes {
								name
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

		console.log(data?.viewer?.organization?.repositories);

		return data?.organization?.repositories ?? [];
	}

	async getAll(githubToken: GithubToken) {
		const query = gql`
			query getOrgsRepos {
				viewer {
					organizations(first: 10) {
						nodes {
							login
							avatarUrl
							viewerCanAdminister
						}
					}
				}
			}
		`;

		const data = await this.githubService.request.withToken(query, githubToken);

		return data?.viewer?.organizations?.nodes ?? [];
	}
}
