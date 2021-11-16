import { Injectable, Logger } from '@nestjs/common';
import { GithubToken } from 'src/types/githubToken.type';
import { GithubService } from '../client/github.service';

@Injectable()
export class OrganizationService {
	private logger = new Logger('OrganizationService');

	constructor(private readonly githubService: GithubService) {}

	async getAll(githubToken: GithubToken) {
		return { data: githubToken };
	}
}
