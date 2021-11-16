import { Injectable, Logger } from '@nestjs/common';
import { gql, GraphQLClient } from 'graphql-request';
import { GithubToken } from 'src/types/githubToken.type';
import { GithubService } from '../client/github.service';

@Injectable()
export class OrganizationService {
	private logger = new Logger('OrganizationService');

	constructor(private readonly githubService: GithubService) {}

	async getAll(githubToken: GithubToken) {
		const client = new GraphQLClient('https://api.github.com/graphql');

		const query = gql`
			query {
				__type(name: "Repository") {
					name
					kind
					description
					fields {
						name
					}
				}
			}
		`;

		const data = await client.request(
			query,
			{},
			{ Authorization: `Bearer ${githubToken.access_token}` },
		);

		console.log(data);

		return data;
	}
}
