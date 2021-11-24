import { selectOrganizations } from 'app/store/slices/organization.slice';
import { fetchCollaboratedRepos, selectRepositories } from 'app/store/slices/repositories.slice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useRepositories = () => {
	const dispatch = useDispatch();
	const { repositories, selectedIndex, isLoading } = useSelector(selectRepositories);
	const { organizations, selectedIndex: selectedOrganizationIndex } =
		useSelector(selectOrganizations);

	useEffect(() => {
		if (selectedOrganizationIndex && !repositories && !isLoading) {
			dispatch(
				fetchCollaboratedRepos({
					organizationLogin: organizations[selectedOrganizationIndex]?.login,
				})
			);
		}
	}, [dispatch, repositories, isLoading, organizations, selectedOrganizationIndex]);

	return { repositories, selectedIndex, isLoading };
};

export default useRepositories;
