/* eslint-disable */
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TerminusModule } from '@nestjs/terminus';
import { join } from 'path';
import { AuthModule } from './modules/auth/auth.module';
import { GithubModule } from './modules/client/github.module';
import { ConfigModule } from './modules/config/config.module';
import { HealthController } from './modules/health/healt.controller';
import { OrganizationModule } from './modules/organization/organization.module';
import { ProfileModule } from './modules/profile/profile.module';

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', '..', 'frontend', 'build'),
		}),
		HttpModule.register({
			timeout: 5000,
			maxRedirects: 5,
		}),
		AuthModule,
		ConfigModule,
		GithubModule,
		TerminusModule,
		OrganizationModule,
		ProfileModule,
	],
	controllers: [HealthController],
})
export class AppModule {}
