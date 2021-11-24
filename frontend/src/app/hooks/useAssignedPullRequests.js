import {
	fetchAssignedPullRequests,
	selectPullRequests,
} from 'app/store/slices/pull-requests.slice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOrganizations, useRepositories } from '.';

const useAssignedPullRequests = () => {
	const dispatch = useDispatch();
	const { pullRequests, isLoading } = useSelector(selectPullRequests);
	const { repositories, selectedIndex: selectedRepositoryIndex } = useRepositories();
	const { organizations, selectedIndex: selectedOrganizationIndex } = useOrganizations();

	console.log(repositories[selectedRepositoryIndex]?.name);
	console.log(repositories[selectedRepositoryIndex]);

	useEffect(() => {
		if (selectedRepositoryIndex !== null && !pullRequests && !isLoading) {
			dispatch(
				fetchAssignedPullRequests({
					organizationLogin: organizations[selectedOrganizationIndex]?.login,
					repositoryName: repositories[selectedRepositoryIndex]?.name,
				})
			);
		}
	}, [
		dispatch,
		pullRequests,
		isLoading,
		repositories,
		selectedRepositoryIndex,
		organizations,
		selectedOrganizationIndex,
	]);

	return { pullRequests, isLoading };
};

export default useAssignedPullRequests;
