import { Box, makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useRepositories } from 'app/hooks';
import RepositoryNavBarItem from './RepositoryNavBarItem';

export default function RepositoryNavBar() {
	const classes = useStyles();
	const { repositories, selectedIndex, isLoading } = useRepositories();

	return (
		<Box className={classes.sideBar}>
			<Box className={classes.container}>
				{isLoading ? (
					<>
						<Skeleton className={classes.skeleton} />
						<Skeleton className={classes.skeleton} />
						<Skeleton className={classes.skeleton} />
					</>
				) : (
					repositories?.map((repository, index) => (
						<RepositoryNavBarItem
							index={index}
							key={`${repository.name}`}
							selectedIndex={selectedIndex}
							repository={repository}
						/>
					))
				)}
			</Box>
		</Box>
	);
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
