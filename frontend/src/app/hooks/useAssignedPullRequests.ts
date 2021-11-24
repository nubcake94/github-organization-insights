import {
	fetchAssignedPullRequests,
	selectPullRequests,
} from 'app/store/slices/pull-requests.slice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useAssignedPullRequests = () => {
	const dispatch = useDispatch();
	const { pullRequests, isLoading } = useSelector(selectPullRequests);

	useEffect(() => {
		if (!pullRequests && !isLoading) {
			dispatch(fetchAssignedPullRequests());
		}
	}, [dispatch, pullRequests, isLoading]);

	return { pullRequests, isLoading };
};

export default useAssignedPullRequests;
