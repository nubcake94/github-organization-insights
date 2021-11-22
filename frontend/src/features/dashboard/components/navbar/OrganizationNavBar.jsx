import { Box, Divider, makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { LogoutButton } from 'app/components';
import { useOrganizations } from 'app/hooks';
import OrganizationNavBarItem from './OrganizationNavBarItem';
import ProfileNavBarItem from './ProfileNavBarItem';

export default function OrganizationNavBar() {
	const classes = useStyles();

	const { organizations, selectedIndex, isLoading } = useOrganizations();

	return (
		<>
			<Box className={classes.sideBar}>
				<Box flex={1} className={classes.container}>
					<ProfileNavBarItem />
					<Divider className={classes.divider} />
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
								key={`${organization.login}`}
								selectedIndex={selectedIndex}
								organization={organization}
							/>
						))
					)}
				</Box>
				<Box className={classes.logoutContainer}>
					<LogoutButton />
				</Box>
			</Box>
		</>
	);
}

const useStyles = makeStyles((theme) => ({
	sideBar: {
		display: 'flex',
		flexDirection: 'column',
		minWidth: '350px',
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
		alignSelf: 'flex-end',
	},
	skeleton: {
		height: '32px',
	},
}));
