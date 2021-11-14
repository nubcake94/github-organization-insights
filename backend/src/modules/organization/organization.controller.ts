import { Controller, Get, Req } from '@nestjs/common';
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
		this.organizationService.getAll(req.githubToken);
	}
}
