import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 5000;

async function bootstrap() {
	const logger = process.env.NODE_ENV === 'production' ? console : new Logger('bootstrap');
	const app = await NestFactory.create(AppModule);

	app.setGlobalPrefix('api');

	await app.listen(PORT);
	logger.log(`Application is listening on port ${PORT}`);
}
bootstrap();
