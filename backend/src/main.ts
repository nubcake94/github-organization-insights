import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from './modules/config/config.service';

async function bootstrap() {
	const logger = process.env.NODE_ENV === 'production' ? console : new Logger('bootstrap');
	const app = await NestFactory.create(AppModule, { logger });

	app.setGlobalPrefix('api');

	const configService: ConfigService = app.get(ConfigService);

	const swaggerOptions = new DocumentBuilder()
		.setTitle('Github Organization Insights API')
		.setDescription('Github Organization Insights API Description')
		.setVersion('0.0.1')
		.addTag('auth')
		.build();
	const document = SwaggerModule.createDocument(app, swaggerOptions);
	SwaggerModule.setup('api', app, document);

	await app.listen(configService.get('PORT'));
	logger.log(`Application is listening on port ${configService.get('PORT')}`);
}
bootstrap();
