import { Button, makeStyles } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useGitHubAuthentication } from 'app/hooks';
import palette from 'app/theme/palette';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { Hypnosis } from 'react-cssfx-loading/lib';
import { useLocation } from 'react-router';

const GitHubButton = () => {
	const classes = useStyles();
	const { search } = useLocation();
	const { handleAuthenticationRequest } = useGitHubAuthentication();

	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const { code } = queryString.parse(search);
		if (code) {
			setLoading(true);
		}
	}, [search]);

	return (
		<Button
			startIcon={
				loading ? (
					<Hypnosis color={palette.text.primary} width="16px" height="16px" />
				) : (
					<GitHubIcon />
				)
			}
			className={classes.button}
			onClick={handleAuthenticationRequest}
		>
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
