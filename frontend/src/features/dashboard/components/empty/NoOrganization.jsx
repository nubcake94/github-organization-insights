import { Box, makeStyles, Typography } from '@material-ui/core';
import palette from 'app/theme/palette';

const NoOrganization = () => {
	const classes = useStyles();

	return (
		<Box className={classes.container} color="subtitle1">
			<Typography variant="h2" className={classes.text}>
				Nincs kiválasztott organization.
			</Typography>
			<Typography variant="h2" className={classes.text}>
				Választáshoz a bal oldali listát használhatod!
			</Typography>
		</Box>
	);
};

const useStyles = makeStyles(() => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		minHeight: '100%',
	},
	text: {
		color: palette.text.subtitle1,
	},
}));

export default NoOrganization;
