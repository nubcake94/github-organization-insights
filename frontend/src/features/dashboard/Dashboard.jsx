import { makeStyles } from '@material-ui/core';
import { Page } from 'app/components';
import { useOrganizations, useRepositories } from 'app/hooks';
import DashboardContent from './components/content/DashboardContent';
import NoOrganization from './components/empty/NoOrganization';
import NoRepository from './components/empty/NoRepository';
import OrganizationNavBar from './components/organization-navbar/OrganizationNavBar';
import RepositoryNavBar from './components/repository-navbar/RepositoryNavBar';

const Dashboard = () => {
	const classes = useStyles();

	const { selectedIndex: selectedOrganizationIndex } = useOrganizations();
	const { selectedIndex: selectedRepositoryIndex } = useRepositories();

	return (
		<Page title="Dashboard" className={classes.page}>
			<OrganizationNavBar />
			{selectedOrganizationIndex === null ? (
				<NoOrganization />
			) : (
				<>
					<RepositoryNavBar />
					{selectedRepositoryIndex === null ? <NoRepository /> : <DashboardContent />}
				</>
			)}
		</Page>
	);
};

const useStyles = makeStyles(() => ({
	page: {
		flexDirection: 'row',
	},
}));

export default Dashboard;
