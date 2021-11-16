import { Global, Module } from '@nestjs/common';
import { GithubService } from './github.service';

@Global()
@Module({
	providers: [
		{
			provide: GithubService,
			useValue: new GithubService(),
		},
	],
	exports: [GithubService],
})
export class GithubModule {}
