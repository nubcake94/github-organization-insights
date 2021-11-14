import { Box, Button, Typography } from '@material-ui/core';

const Landing = () => {
	return (
		<Box>
			<Typography variant="h1">/</Typography>
			<Button color="primary" href="/login">
				Bejelentkezés
			</Button>
		</Box>
	);
};

export default Landing;
