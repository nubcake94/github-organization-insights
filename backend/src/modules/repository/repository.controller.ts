import { Controller, Get, Param, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GithubToken } from 'src/types/githubToken.type';
import { RepositoryService } from './repository.service';

@ApiTags('repository')
@Controller('repository')
export class RepositoryController {
	constructor(private repositoryService: RepositoryService) {}

	@Get('/:login/collaborated')
	async getCollaboratedRepositories(
		@Req() req: Request & { githubToken: GithubToken },
		@Param('login') organizationLogin: string,
	) {
		return this.repositoryService.getCollaboratedRepositories(
			req.githubToken,
			organizationLogin,
		);
	}

	@Get('/:organizationLogin/:repositoryName/assigned')
	async getAssignedPullRequests(
		@Req() req: Request & { githubToken: GithubToken },
		@Param('organizationLogin') organizationLogin: string,
		@Param('repositoryName') repositoryName: string,
	) {
		return this.repositoryService.getAssignedPullRequests(
			req.githubToken,
			organizationLogin,
			repositoryName,
		);
	}
}
