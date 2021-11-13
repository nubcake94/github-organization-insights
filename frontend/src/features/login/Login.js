import { Box, makeStyles, Typography } from '@material-ui/core';
import { GitHubButton, Page } from 'app/components';

const Login = () => {
	const classes = useStyles();

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
	},
	paper: {
		backgroundColor: theme.palette.background.paperLighter,
	},
	title: {
		fontSize: '40px',
	},
}));

export default Login;
