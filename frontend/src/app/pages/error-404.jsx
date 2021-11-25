import { Box, Button, Divider, makeStyles, Typography } from '@material-ui/core';
import { Page } from 'app/components';
import palette from 'app/theme/palette';

const Error404 = () => {
	const classes = useStyles();

	return (
		<Page title="404" className={classes.page}>
			<Box className={classes.mainContainer}>
				<Typography variant="h1" className={classes.errorCode}>
					404
				</Typography>
				<Divider flexItem="true" orientation="vertical" className={classes.divider} />
				<Typography variant="h2" className={classes.text}>
					A kért oldal nem található.
				</Typography>
			</Box>
			<Button href="\">Vissza a főoldalra</Button>
		</Page>
	);
};

const useStyles = makeStyles((theme) => ({
	page: {
		justifyContent: 'center',
		alignItems: 'center',
	},

	mainContainer: {
		display: 'flex',
		flexFlow: 'row wrap',
		alignItems: 'center',
	},

	divider: {
		margin: theme.spacing(4),
	},

	errorCode: {
		flex: 1,
		fontSize: '150px',
		textAlign: 'right',
	},

	text: {
		flex: 1,
		color: palette.text.subtitle1,
	},
}));

export default Error404;
