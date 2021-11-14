import { Box, makeStyles, Typography } from '@material-ui/core';
import { GitHubButton, Page } from 'app/components';
import axiosService from 'app/store/axiosService';
import { selectToken } from 'app/store/slices/auth.slice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const Login = () => {
	const classes = useStyles();

	const token = useSelector(selectToken);
	const history = useHistory();

	useEffect(() => {
		if (token) {
			history.push('/user/dashboard');
		}
	}, [token, history]);

	axiosService.instance.get('/health');
	return (
		<Page title="Bejelentkezés" className={classes.mainContainer}>
			<Typography variant="h2" className={classes.title}>
				Bejelentkezés
			</Typography>
			<Typography variant="subtitle1">
				A github statisztikáid eléréséhez bejelentkezés szükséges, melyet az alábbi gombra
				kattintva tehetsz meg.
			</Typography>
			<Box>
				<GitHubButton />
			</Box>
		</Page>
	);
};

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			paddingLeft: '16px',
			paddingRight: '16px',
		},
	},
	paper: {
		backgroundColor: theme.palette.background.paperLighter,
	},
	title: {
		fontSize: '40px',
	},
}));

export default Login;
