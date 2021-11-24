import { Typography } from '@material-ui/core';
import { useOrganizations } from 'app/hooks';
import StudentContent from './student/StudentContent';

export default function DashboardContent() {
	const { organizations, selectedIndex: selectedOrganizationIndex } = useOrganizations();
	const selectedOrganization = organizations[selectedOrganizationIndex];

	const viewerCanAdminister = selectedOrganization?.viewerCanAdminister;

	return viewerCanAdminister ? (
		<>
			<Typography variant="h1">OWNER CASE</Typography>
		</>
	) : (
		<StudentContent />
	);
}
