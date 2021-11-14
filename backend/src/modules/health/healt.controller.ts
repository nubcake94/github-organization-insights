import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';
import { Public } from '../auth/decorators/public.decorator';

@Controller('health')
export class HealthController {
	constructor(private health: HealthCheckService, private dns: HttpHealthIndicator) {}

	@Get()
	@Public()
	@HealthCheck()
	healthCheck() {
		return this.health.check([() => this.dns.pingCheck('nestjs-docs', 'https://google.com')]);
	}
}
