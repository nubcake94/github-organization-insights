import { fetchCollaboratedRepos, selectRepositories } from 'app/store/slices/repositories.slice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOrganizations } from '.';

const useRepositories = () => {
	const dispatch = useDispatch();
	const { repositories, selectedIndex, isLoading } = useSelector(selectRepositories);
	const { organizations, selectedIndex: selectedOrganizationIndex } = useOrganizations();

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
