import { Box, makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useOrganizations } from 'app/hooks';
import OrganizationNavBarItem from './OrganizationNavBarItem';

export default function OrganizationNavBar() {
	const classes = useStyles();

	const { organizations, selectedIndex, isLoading } = useOrganizations();

	return (
		<>
			<Box className={classes.sideBar}>
				<Box className={classes.container}>
					{isLoading ? (
						<>
							<Skeleton className={classes.skeleton} />
							<Skeleton className={classes.skeleton} />
							<Skeleton className={classes.skeleton} />
						</>
					) : (
						organizations?.map((organization, index) => (
							<OrganizationNavBarItem
								index={index}
								selectedIndex={selectedIndex}
								organization={organization}
							/>
						))
					)}
				</Box>
			</Box>
		</>
	);
}

const useStyles = makeStyles((theme) => ({
	sideBar: {
		width: '350px',
		minHeight: '100vh',
		borderRight: `1px solid ${theme.palette.divider}`,
		backgroundColor: theme.palette.background.paper,
	},
	container: {
		padding: '32px',
	},
	skeleton: {
		height: '32px',
	},
}));
