import { Controller, Get, Param, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { GithubToken } from 'src/types/githubToken.type';
import { OrganizationService } from './organization.service';

@ApiTags('organization')
@Controller('organization')
export class OrganizationController {
	constructor(private organizationService: OrganizationService) {}

	@Get('/')
	async getAll(@Req() req: Request & { githubToken: GithubToken }) {
		return this.organizationService.getAll(req.githubToken);
	}

	@Get('/:login')
	async getCollaboratedRepositories(
		@Req() req: Request & { githubToken: GithubToken },
		@Param('login') organizationLogin: string,
	) {
		return this.organizationService.getCollaboratedRepositories(
			req.githubToken,
			organizationLogin,
		);
	}
}
