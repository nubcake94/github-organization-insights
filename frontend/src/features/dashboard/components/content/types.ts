export type Assignee = {
	login: string;
};

export type Author = {
	login: string;
	avatarUrl?: string;
};

export type Comment = {
	author: Author;
	createdAt: string;
	body?: string;
};

export type Commit = {
	commit: {
		message: string;
		pushedDate: string;
	};
};

export type Label = {
	color: string;
	name: string;
};

export enum ReviewDecision {
	APPROVED = 'APPROVED',
	CHANGES_REQUESTED = 'CHANGES_REQUESTED',
	REVIEW_REQUIRED = 'REVIEW_REQUIRED',
}

export type Review = {
	body: string;
	comments: { nodes: Comment[] };
};

export type RequestedReviewer = {
	requestedReviewer: Assignee;
};

export type PullRequest = {
	assignees?: {
		nodes: Assignee[];
	};
	body?: string;
	changedFiles: number;
	comments: {
		nodes: Comment[];
	};
	commits: {
		nodes: Commit[];
	};
	editor?: any;
	labels: {
		nodes: Label[];
	};
	number: number;
	title: string;
	givenPoint?: string;
	reviewDecision: ReviewDecision;
	reviewRequests: {
		nodes: RequestedReviewer[];
	};
	reviews: {
		nodes: Review[];
	};
};
