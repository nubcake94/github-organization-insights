import { Controller, Get, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GithubToken } from 'src/types/githubToken.type';
import { ProfileService } from './profile.service';

@ApiTags('profile')
@Controller('profile')
export class ProfileController {
	constructor(private profileService: ProfileService) {}

	@Get('/')
	async get(@Req() req: Request & { githubToken: GithubToken }) {
		return this.profileService.get(req.githubToken);
	}
}
