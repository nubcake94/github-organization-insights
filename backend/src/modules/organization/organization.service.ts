import { Injectable, Logger } from '@nestjs/common';
import { gql } from 'graphql-request';
import { GithubToken } from 'src/types/githubToken.type';
import { GithubService } from '../client/github.service';

@Injectable()
export class OrganizationService {
	private logger = new Logger('OrganizationService');

	constructor(private readonly githubService: GithubService) {}

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
