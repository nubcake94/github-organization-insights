import { makeStyles, Typography } from '@material-ui/core';
import { Page } from 'app/components';

const Sandbox = () => {
	const classes = useStyles();
	return (
		<Page title="Homokozó" className={classes.mainContainer}>
			<Typography variant="h1">Sandbox here!</Typography>
			<Typography variant="h2">Sandbox here!</Typography>
			<Typography variant="h3">Sandbox here!</Typography>
			<Typography variant="h4">Sandbox here!</Typography>
			<Typography variant="h5">Sandbox here!</Typography>
		</Page>
	);
};

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			paddingLeft: '16px',
			paddingRight: '16px',
		},
	},
}));

export default Sandbox;
