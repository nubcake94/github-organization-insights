import { Button, makeStyles } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import palette from 'app/theme/palette';

const GitHubButton = () => {
	const classes = useStyles();
	return (
		<Button startIcon={<GitHubIcon />} className={classes.button}>
			Bejelentkezés
		</Button>
	);
};

const useStyles = makeStyles(() => ({
	button: {
		margin: 16,
		padding: '8px 24px 8px 24px',
		borderRadius: 4,
		backgroundColor: palette.background.paperLighter,
	},
}));

export default GitHubButton;
