import { Avatar, Box, makeStyles, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useProfile } from 'app/hooks';

export default function ProfileNavBarItem() {
	const classes = useStyles();
	const { user, isLoading } = useProfile();

	return (
		<Box className={classes.container}>
			{isLoading ? (
				<Skeleton variant="circle" className={classes.avatar} />
			) : (
				user?.avatarUrl && (
					<Avatar className={classes.avatar} src={user.avatarUrl} alt="profileAvatar" />
				)
			)}
			{isLoading ? (
				<Skeleton width={100} />
			) : (
				user?.login && (
					<Typography variant="body1" className={classes.text}>
						{user.login}
					</Typography>
				)
			)}
		</Box>
	);
}

const useStyles = makeStyles(() => ({
	avatar: {
		width: '20px',
		height: '20px',
		marginRight: '8px',
	},
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '8px 0px 8px 0px',
	},
	text: {
		fontWeight: 'bold',
	},
}));
