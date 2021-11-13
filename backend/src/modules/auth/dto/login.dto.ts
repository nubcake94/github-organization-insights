import { IsString } from 'class-validator';

export class LoginDto {
	@IsString()
	code: string;

	@IsString()
	REACT_APP_GITHUB_CLIENT_ID: string;

	@IsString()
	REACT_APP_GITHUB_REDIRECT_URI: string;
}
