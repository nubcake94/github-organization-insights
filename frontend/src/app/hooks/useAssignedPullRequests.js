import {
	fetchAssignedPullRequests,
	selectPullRequests,
} from 'app/store/slices/pull-requests.slice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRepositories } from '.';

const useAssignedPullRequests = () => {
	const dispatch = useDispatch();
	const { pullRequests, isLoading } = useSelector(selectPullRequests);
	const { repositories, selectedIndex: selectedRepositoryIndex } = useRepositories();

	useEffect(() => {
		if (selectedRepositoryIndex !== null && !pullRequests && !isLoading) {
			dispatch(
				fetchAssignedPullRequests({
					repositoryName: repositories[selectedRepositoryIndex]?.name,
				})
			);
		}
	}, [dispatch, pullRequests, isLoading, repositories, selectedRepositoryIndex]);

	return { pullRequests, isLoading };
};

export default useAssignedPullRequests;
