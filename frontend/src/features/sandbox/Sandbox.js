import { Button, makeStyles, Typography } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import { Page } from 'app/components';
import axiosService from 'app/store/axiosService';
import palette from 'app/theme/palette';

const Sandbox = () => {
	const classes = useStyles();

	const getAllOrganizations = async () => {
		const { data } = await axiosService.instance.get('/organization');
		console.log(data);
	};

	return (
		<Page title="Homokozó" className={classes.mainContainer}>
			<Typography variant="h1">Sandbox here!</Typography>
			<Typography variant="h2">Sandbox here!</Typography>
			<Typography variant="h3">Sandbox here!</Typography>
			<Typography variant="h4">Sandbox here!</Typography>
			<Typography variant="h5">Sandbox here!</Typography>
			<Typography>Sandbox here!</Typography>
			<Typography variant="subtitle1">Sandbox here!</Typography>
			<Button
				startIcon={<GetAppIcon />}
				className={classes.button}
				onClick={getAllOrganizations}
			>
				Get all organizations
			</Button>
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
	button: {
		margin: 16,
		padding: '8px 24px 8px 24px',
		borderRadius: 4,
		backgroundColor: palette.background.paperLighter,
	},
}));

export default Sandbox;
