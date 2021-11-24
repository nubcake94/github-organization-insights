import { Injectable, Logger } from '@nestjs/common';
import { gql } from 'graphql-request';
import { GithubToken } from 'src/types/githubToken.type';
import { GithubService } from '../client/github.service';
import { ProfileService } from '../profile/profile.service';

@Injectable()
export class RepositoryService {
	private logger = new Logger('RepositoryService');

	constructor(
		private readonly githubService: GithubService,
		private readonly profileService: ProfileService,
	) {}

	async getCollaboratedRepositories(githubToken: GithubToken, organizationLogin: string) {
		const query = gql`
			query getCollaboratedRepos($login: String!) {
				viewer {
					organization(login: $login) {
						repositories(first: 100) {
							nodes {
								name
								nameWithOwner
								openGraphImageUrl
								viewerPermission
							}
						}
					}
				}
			}
		`;

		const data = await this.githubService.request.withToken(query, githubToken, {
			login: organizationLogin,
		});

		return data?.viewer?.organization?.repositories?.nodes ?? [];
	}

	async getAssignedPullRequests(
		githubToken: GithubToken,
		organizationName: string,
		repositoryName: string,
	) {
		const viewer = await this.profileService.get(githubToken);

		const query = gql`
			query getAssignedPullRequests($login: String!, $name: String!) {
				viewer {
					organization(login: $login) {
						repository(name: $name) {
							pullRequests(first: 50) {
								nodes {
									assignees(first: 5) {
										nodes {
											login
										}
									}
									body
									changedFiles
									comments(first: 20) {
										nodes {
											author {
												avatarUrl
												login
											}
											createdAt
											body
										}
									}
									commits(first: 30) {
										nodes {
											commit {
												message
												pushedDate
											}
										}
									}
									createdAt
									editor {
										login
									}
									labels(first: 5) {
										nodes {
											color
											name
										}
									}
									number
									title
									reviewDecision
									reviewRequests(first: 5) {
										nodes {
											requestedReviewer {
												... on User {
													login
												}
											}
										}
									}
									reviews(first: 5) {
										nodes {
											body
											comments(first: 10) {
												nodes {
													author {
														avatarUrl
														login
													}
													createdAt
													body
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		`;

		const data = await this.githubService.request.withToken(query, githubToken, {
			login: organizationName,
			name: repositoryName,
		});

		const pullRequests = data?.viewer?.organization?.repository?.pullRequests;
		const assignees = pullRequests?.nodes?.map((pr) =>
			pr?.assignees?.nodes?.map((assignee) => assignee?.login),
		);

		const assignedPullRequests = pullRequests?.nodes?.filter((_, index) =>
			assignees[index].includes(viewer.login),
		);

		return assignedPullRequests ?? [];
	}
}
