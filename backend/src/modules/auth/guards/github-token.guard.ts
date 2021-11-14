import { CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

export class GithubTokenGuard implements CanActivate {
	constructor(private readonly reflector: Reflector) {}

	canActivate(context: ExecutionContext): boolean {
		const isPublic = this.reflector.get<boolean>('public', context.getHandler());

		if (isPublic) {
			return true;
		}

		const request = context.switchToHttp().getRequest();
		// eslint-disable-next-line camelcase
		const { access_token, scope, token_type } = request?.query;

		// eslint-disable-next-line camelcase
		if (access_token && scope && token_type) {
			return true;
		}

		throw new UnauthorizedException('User is not authorized');
	}
}
