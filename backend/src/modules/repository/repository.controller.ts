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
		@Param('login') organizationName: string,
	) {
		return this.repositoryService.getCollaboratedRepositories(
			req.githubToken,
			organizationName,
		);
	}
}
