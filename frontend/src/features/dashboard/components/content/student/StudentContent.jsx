import { Box, makeStyles, Typography } from '@material-ui/core';
import { useAssignedPullRequests } from 'app/hooks';

export default function StudentContent() {
	const classes = useStyles();
	const { pullRequests, isLoading } = useAssignedPullRequests();

	return (
		<Box className={classes.container}>
			<Typography variant="h1">PLACEHOLDER</Typography>
		</Box>
	);
}

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		padding: '16px',
		backgroundColor: 'red',
		overflowY: 'auto',
	},
}));
