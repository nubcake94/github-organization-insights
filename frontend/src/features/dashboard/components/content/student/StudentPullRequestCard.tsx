import { Avatar, Box, Card, Chip, Divider, makeStyles, Typography } from '@material-ui/core';
import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineSeparator,
} from '@material-ui/lab';
import palette from 'app/theme/palette';
import moment from 'moment';
import { PullRequest } from '../types';
import ReviewDecisionIcon from './ReviewDecisionIcon';

export default function StudentPullRequestCard({ pullRequest }: { pullRequest: PullRequest }) {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<Box className={classes.header}>
				<Typography variant="h2">{pullRequest?.title}</Typography>
				<Typography variant="h2" noWrap>
					&nbsp;
				</Typography>
				<Typography
					variant="h2"
					noWrap
					className={classes.greyColor}
				>{`#${pullRequest?.number}`}</Typography>
			</Box>
			<Divider />
			<Box display="flex" flexDirection="row" py={2}>
				<Box flex={7} flexDirection="column">
					<Typography variant="body1">{pullRequest?.body}</Typography>
					<Timeline align="right">
						{pullRequest?.commits?.nodes?.map((commit) => (
							<>
								<TimelineItem>
									<TimelineSeparator>
										<TimelineDot />
										<TimelineConnector />
									</TimelineSeparator>
									<TimelineContent>
										<Typography variant="body1">
											{commit?.commit?.message}
										</Typography>
										<Typography variant="body1">
											{moment(commit?.commit?.pushedDate).format(
												'YYYY-MM-DD HH:mm'
											)}
										</Typography>
									</TimelineContent>
								</TimelineItem>
							</>
						))}
					</Timeline>
					{pullRequest?.comments?.nodes?.map((comment) => (
						<Card className={classes.card}>
							<Box display="flex" flexDirection="row" pb={2}>
								<Avatar
									src={comment?.author?.avatarUrl}
									alt="avatar"
									className={classes.avatar}
								/>
								<Typography variant="h4" style={{ marginRight: '8px' }}>
									{comment?.author?.login}
								</Typography>
								<Typography variant="h5">
									{moment(comment?.createdAt).format('YYYY-MM-DD HH:mm')}
								</Typography>
							</Box>
							<Typography variant="body1">{comment?.body}</Typography>
						</Card>
					))}
				</Box>
				<Box flex={2}>
					<Typography variant="h5" className={classes.greyColor}>
						Assignees
					</Typography>
					{pullRequest?.assignees?.nodes?.map((assignee) => (
						<Typography variant="body1">{assignee?.login}</Typography>
					))}
					<Divider className={classes.divider} />
					<Typography variant="h5" className={classes.greyColor}>
						Reviewers
					</Typography>
					{pullRequest?.reviewRequests?.nodes?.map((reviewRequest) => (
						<Typography variant="body1">
							{reviewRequest?.requestedReviewer?.login}
						</Typography>
					))}
					<Divider className={classes.divider} />
					<Typography variant="h5" className={classes.greyColor}>
						Labels
					</Typography>
					{pullRequest?.labels?.nodes?.map((label) => (
						<Chip
							key={`label-${label?.name}`}
							className={classes.chip}
							style={{ background: `#${label?.color ?? 'FFFFFF'}` }}
							label={label?.name}
						/>
					))}
					<Divider className={classes.divider} />
					<Typography variant="h5" className={classes.greyColor}>
						Changed files
					</Typography>
					<Typography variant="body1">{pullRequest?.changedFiles}</Typography>
					<Divider className={classes.divider} />
					<ReviewDecisionIcon reviewDecision={pullRequest?.reviewDecision} />
					<Typography variant="h4">{pullRequest?.givenPoint}</Typography>
				</Box>
			</Box>
		</Card>
	);
}

const useStyles = makeStyles((theme) => ({
	card: {
		display: 'flex',
		flexDirection: 'column',
		border: `1px solid ${theme.palette.divider}`,
		margin: theme.spacing(2),
		padding: theme.spacing(3),
	},
	greyColor: {
		color: palette.text.subtitle1,
	},
	chip: {
		margin: '4px',
		padding: '0px',
	},
	divider: {
		margin: '8px 0px 8px 0px',
	},
	avatar: {
		width: '20px',
		height: '20px',
		marginRight: '8px',
	},
	header: {
		display: 'flex',
		flexDirection: 'row',
		marginBottom: '8px',
	},
}));
