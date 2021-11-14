import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as helmet from 'helmet';
import { AppModule } from './app.module';
import { GithubTokenGuard } from './modules/auth/guards/github-token.guard';
import { GithubTokenInterceptor } from './modules/auth/interceptors/github-token.interceptor';

const PORT = 5000;

async function bootstrap() {
	const logger = process.env.NODE_ENV === 'production' ? console : new Logger('bootstrap');
	const app = await NestFactory.create(AppModule, { logger });

	// Set HTTP response headers
	app.use(helmet());

	const reflector = app.get(Reflector);

	app.useGlobalPipes(new ValidationPipe({ transform: true }));
	app.useGlobalInterceptors(new GithubTokenInterceptor(reflector));
	app.useGlobalGuards(new GithubTokenGuard(reflector));

	app.setGlobalPrefix('api');

	const swaggerOptions = new DocumentBuilder()
		.setTitle('Github Organization Insights API')
		.setDescription('Github Organization Insights API Description')
		.setVersion('0.0.1')
		.addTag('auth')
		.build();
	const document = SwaggerModule.createDocument(app, swaggerOptions);
	SwaggerModule.setup('api', app, document);

	await app.listen(PORT);
	logger.log(`Application is listening on port ${PORT}`);
}
bootstrap();
