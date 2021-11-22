import { makeStyles } from '@material-ui/core';
import { Page } from 'app/components';
import { useOrganizations } from 'app/hooks';
import NoOrganization from './components/empty/NoOrganization';
import OrganizationNavBar from './components/navbar/OrganizationNavBar';

const Dashboard = () => {
	const classes = useStyles();

	const { selectedIndex } = useOrganizations();

	return (
		<Page title="Dashboard" className={classes.page}>
			<OrganizationNavBar />
			{selectedIndex === null && <NoOrganization />}
		</Page>
	);
};

const useStyles = makeStyles(() => ({
	page: {
		flexDirection: 'row',
	},
}));

export default Dashboard;
