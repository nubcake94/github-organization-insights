import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AuthService {
	private logger = new Logger('AuthService');

	constructor() {} // TODO add context

	async login() {}
}
