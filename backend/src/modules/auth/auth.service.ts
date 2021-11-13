import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
	private logger = new Logger('AuthService');

	constructor(
		private readonly configService: ConfigService,
		private readonly httpService: HttpService,
	) {}

	async login(loginDto: LoginDto) {
		const { code, REACT_APP_GITHUB_CLIENT_ID, REACT_APP_GITHUB_REDIRECT_URI } = loginDto;
		const REACT_APP_CLIENT_SECRET = this.configService.get('REACT_APP_CLIENT_SECRET');

		return this.httpService.post(
			`https://github.com/login/oauth/access_token?client_id=${REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=${REACT_APP_GITHUB_REDIRECT_URI}&client_secret=${REACT_APP_CLIENT_SECRET}&code=${code}`,
		);
	}
}
