import { Controller, Get, Req } from '@nestjs/common';
import { HealthCheck, HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
	constructor(private health: HealthCheckService, private dns: HttpHealthIndicator) {}

	@Get()
	@HealthCheck()
	healthCheck(@Req() request) {
		console.log(request.query);
		return this.health.check([() => this.dns.pingCheck('nestjs-docs', 'https://google.com')]);
	}
}
