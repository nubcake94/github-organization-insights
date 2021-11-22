import { fetchOrganizations, selectOrganizations } from 'app/store/slices/organization.slice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useOrganizations = () => {
	const dispatch = useDispatch();
	const { organizations, selectedIndex, isLoading } = useSelector(selectOrganizations);

	useEffect(() => {
		if (!organizations && !isLoading) {
			dispatch(fetchOrganizations());
		}
	}, [dispatch, organizations, isLoading]);

	return { organizations, selectedIndex, isLoading };
};

export default useOrganizations;
