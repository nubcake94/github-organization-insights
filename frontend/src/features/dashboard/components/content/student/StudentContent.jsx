import { Box, makeStyles } from '@material-ui/core';
import { useAssignedPullRequests } from 'app/hooks';
import StudentPullRequestCard from './StudentPullRequestCard';

export default function StudentContent() {
	const classes = useStyles();
	const { pullRequests, isLoading } = useAssignedPullRequests();

	return (
		<Box className={classes.container}>
			{pullRequests?.map((pullRequest) => (
				<StudentPullRequestCard pullRequest={pullRequest} />
			))}
		</Box>
	);
}

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		padding: '16px',
		overflowY: 'auto',
	},
}));
