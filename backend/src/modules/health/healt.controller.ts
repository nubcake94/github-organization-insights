import { Controller, Get, Query } from '@nestjs/common';
import { HealthCheck, HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';
import { GithubToken } from 'src/types/githubToken.type';

@Controller('health')
export class HealthController {
	constructor(private health: HealthCheckService, private dns: HttpHealthIndicator) {}

	@Get()
	@HealthCheck()
	healthCheck(@Query() query: GithubToken) {
		return this.health.check([() => this.dns.pingCheck('nestjs-docs', 'https://google.com')]);
	}
}
