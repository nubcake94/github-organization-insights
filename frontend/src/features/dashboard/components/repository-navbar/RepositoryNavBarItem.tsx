import { Box, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';

type RepositoryNavBarItemProps = {
	index: number;
	selectedIndex: number;
	repository: {
		name: string;
		nameWithOwner: string;
		openGraphImageUrl: string;
		viewerPermission: string;
	};
};

export default function RepositoryNavBarItem({
	index,
	selectedIndex,
	repository,
}: RepositoryNavBarItemProps) {
	const classes = useStyles();

	const isSelected = selectedIndex === index;

	return (
		<Box className={classes.container}>
			<img className={classes.avatar} src={repository.openGraphImageUrl} alt="orgAvatar" />
			<Typography
				variant="body1"
				className={
					isSelected ? clsx(classes.selected, classes.hoverable) : classes.hoverable
				}
			>
				{repository.nameWithOwner}
			</Typography>
		</Box>
	);
}

const useStyles = makeStyles(() => ({
	container: {
		display: 'flex',
		alignItems: 'center',
		margin: '8px 0px 8px 0px',
	},
	avatar: {
		width: '16px',
		height: '16px',
		borderRadius: 4,
		marginRight: '8px',
	},
	hoverable: {
		'&:hover': {
			textDecoration: 'underline',
			cursor: 'pointer',
		},
	},
	selected: {
		fontWeight: 'bold',
	},
}));
