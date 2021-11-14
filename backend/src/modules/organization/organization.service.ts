import { Injectable, Logger } from '@nestjs/common';
import { GithubToken } from 'src/types/githubToken.type';

@Injectable()
export class OrganizationService {
	private logger = new Logger('OrganizationService');

	async getAll(githubToken: GithubToken) {
		return githubToken;
	}
}
