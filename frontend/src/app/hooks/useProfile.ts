import { fetchProfile, selectUser } from 'app/store/slices/profile.slice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useProfile = () => {
	const dispatch = useDispatch();
	const { user, isLoading } = useSelector(selectUser);

	useEffect(() => {
		if (!user && !isLoading) {
			dispatch(fetchProfile());
		}
	}, [dispatch, user, isLoading]);

	return { user, isLoading };
};

export default useProfile;
