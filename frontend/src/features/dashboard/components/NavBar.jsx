import { Box, makeStyles } from '@material-ui/core';
import { fetchOrganizations, selectOrganizations } from 'app/store/slices/organization.slice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function NavBar() {
	const classes = useStyles();
	const dispatch = useDispatch();

	const { organizations, selectedIndex, isLoading } = useSelector(selectOrganizations);

	useEffect(() => {
		if (!organizations && !isLoading) {
			dispatch(fetchOrganizations());
		}
	}, [dispatch, organizations, isLoading]);

	return (
		<>
			<Box className={classes.sideBar} />
		</>
	);
}

const useStyles = makeStyles((theme) => ({
	sideBar: {
		width: '400px',
		minHeight: '100vh',
		backgroundColor: theme.palette.background.paper,
	},
}));
