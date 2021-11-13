/* eslint-disable */
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from './modules/config/config.module';

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
	],
})
export class AppModule {}
