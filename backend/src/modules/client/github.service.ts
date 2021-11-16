import { Injectable } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';
import { GithubToken } from 'src/types/githubToken.type';

@Injectable()
export class GithubService {
	private client = new GraphQLClient('https://api.github.com/graphql');

	request = {
		withToken: async (
			query: string,
			token: GithubToken,
			variables: Record<string, unknown> = {},
		) => {
			return this.client.request(query, variables, {
				Authorization: `Bearer ${token.access_token}`,
			});
		},
	};
}
