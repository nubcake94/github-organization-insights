import { Box, makeStyles, Typography } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { logout } from 'app/store/slices/auth.slice';
import { useDispatch } from 'react-redux';

const LogoutButton = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(logout());
	};

	return (
		<Box className={classes.container} onClick={handleClick}>
			<Typography variant="body1" className={classes.text}>
				Kijelentkezés
			</Typography>
			<ExitToAppIcon className={classes.icon} size={16} />
		</Box>
	);
};

const useStyles = makeStyles((theme) => ({
	icon: {
		color: theme.palette.text.primary,
		paddingLeft: '8px',
	},
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		cursor: 'pointer',
	},
	text: {
		textTransform: 'uppercase',
	},
}));

export default LogoutButton;
