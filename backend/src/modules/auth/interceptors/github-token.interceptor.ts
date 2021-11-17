import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class GithubTokenInterceptor implements NestInterceptor {
	public constructor(private readonly reflector: Reflector) {}

	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const isPublic = this.reflector.get<boolean>('public', context.getHandler());

		if (isPublic) {
			return next.handle();
		}

		const request = context.switchToHttp().getRequest();
		// eslint-disable-next-line camelcase
		const { access_token, scope, token_type } = request?.query;
		request.githubToken = {
			// eslint-disable-next-line camelcase
			access_token,
			scope,
			// eslint-disable-next-line camelcase
			token_type,
		};

		return next.handle();
	}
}
