import { AppBar, Box, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Page } from 'app/components';

const Landing = () => {
	const classes = useStyles();

	return (
		<Page className={classes.page}>
			<AppBar position="static" elevation={10} className={classes.appbar}>
				<Toolbar className={classes.toolbar}>
					<Box flex={1}>
						<Typography variant='h1' className={classes.title}>Github organization insights</Typography>
					</Box>
					<IconButton href='login'>
						<AccountCircleIcon className={classes.icon} />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Box className={classes.container}>
				<Box className={classes.subContainer}>
					<Typography variant='h2' className={classes.text}>Egy app, ahol egy helyen követheted githubon vezetett tárgyaidat.</Typography>
					<Button href='app/dashboard' className={classes.dashButton} disableElevation startIcon={<ArrowForwardIosIcon />}>
						Mutasd
					</Button>
				</Box>
				<Box className={classes.subContainer}>
					<img src='https://pngimg.com/uploads/github/github_PNG72.png' alt="" />
				</Box>
			</Box>
		</Page >
	);
};

const useStyles = makeStyles((theme) => ({
	page: {
		background: 'linear-gradient(90deg, rgba(30,30,30,1) 0%, rgba(10,10,10,1) 100%)',
	},

	appbar: {
		display: 'flex',
		background: 'none',
	},

	title: {
		fontSize: '2rem',
	},

	toolbar: {
		width: '80%',
		margin: '0 auto',
	},

	container: {
		flex: 1,
		display: 'flex',
	},

	subContainer: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},

	text: {
		fontSize: '4rem',
		marginLeft: theme.spacing(12),
	},

	dashButton: {
		alignSelf: 'flex-start',
		margin: theme.spacing(4),
		marginLeft: theme.spacing(12),
		paddingRight: theme.spacing(2),
		fontSize: '2rem',
		'&:hover': {
			background: 'white',
			color: 'black',
		},
	},

	icon: {
		color: 'white',
		fontSize: '2rem',
	}
}));

export default Landing;
