import { Controller, Get, Req } from '@nestjs/common';
import { HealthCheck, HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';
import { Request } from 'express';
import { GithubToken } from 'src/types/githubToken.type';

@Controller('health')
export class HealthController {
	constructor(private health: HealthCheckService, private dns: HttpHealthIndicator) {}

	@Get()
	@HealthCheck()
	healthCheck(@Req() req: Request & { githubToken: GithubToken }) {
		return this.health.check([() => this.dns.pingCheck('nestjs-docs', 'https://google.com')]);
	}
}
