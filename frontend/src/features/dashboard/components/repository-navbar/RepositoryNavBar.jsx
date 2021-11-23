import { Box, makeStyles } from '@material-ui/core';
import { useRepositories } from 'app/hooks';

export default function RepositoryNavBar() {
	const classes = useStyles();
	const { repositories, selectedIndex, isLoading } = useRepositories();

	return <Box className={classes.sideBar} />;
}

const useStyles = makeStyles((theme) => ({
	sideBar: {
		display: 'flex',
		flexDirection: 'column',
		minWidth: '250px',
		minHeight: '100vh',
		borderRight: `1px solid ${theme.palette.divider}`,
		backgroundColor: theme.palette.background.paper,
	},
	divider: {
		margin: '16px 0px 16px 0px',
	},
	container: {
		padding: '32px',
	},
	logoutContainer: {
		padding: '32px',
		alignItems: 'flex-end',
	},
	skeleton: {
		height: '32px',
	},
}));
