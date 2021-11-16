import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { Injectable } from '@nestjs/common';
import fetch from 'cross-fetch';

@Injectable()
export class GithubService {
	client = new ApolloClient({
		link: new HttpLink({ uri: 'https://api.github.com/graphql', fetch }),
		cache: new InMemoryCache(),
	});
}
