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
			query getOrgs {
				viewer {
					organizations(first: 100) {
						totalCount
						nodes {
							name
						}
					}
				}
			}
		`;

		const data = await this.githubService.request.withToken(query, githubToken);

		console.log(data);

		return data;
	}
}
