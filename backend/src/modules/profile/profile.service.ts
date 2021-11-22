import { Injectable, Logger } from '@nestjs/common';
import { gql } from 'graphql-request';
import { GithubToken } from 'src/types/githubToken.type';
import { GithubService } from '../client/github.service';

@Injectable()
export class ProfileService {
	private logger = new Logger('ProfileService');

	constructor(private readonly githubService: GithubService) {}

	async get(githubToken: GithubToken) {
		const query = gql`
			query getProfile {
				viewer {
					user {
						nodes {
							login
							avatarUrl
						}
					}
				}
			}
		`;

		const data = await this.githubService.request.withToken(query, githubToken);

		console.log(data);
	}
}
