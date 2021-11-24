import { Box, makeStyles, Typography } from '@material-ui/core';
import { selectOrganization } from 'app/store/slices/organization.slice';
import { selectRepository } from 'app/store/slices/repositories.slice';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';

type OrganizationNavBarItemProps = {
	index: number;
	selectedIndex: number;
	organization: {
		login: string;
		avatarUrl: string;
	};
};

export default function OrganizationNavBarItem({
	index,
	selectedIndex,
	organization,
}: OrganizationNavBarItemProps) {
	const classes = useStyles();
	const dispatch = useDispatch();

	const handleClick = () => {
		if (isSelected) {
			dispatch(selectOrganization(null));
			dispatch(selectRepository(null));
		}
		if (!isSelected) {
			dispatch(selectOrganization(index));
			dispatch(selectRepository(null));
		}
	};

	const isSelected = selectedIndex === index;

	return (
		<Box className={classes.container} onClick={handleClick}>
			<img className={classes.avatar} src={organization.avatarUrl} alt="orgAvatar" />
			<Typography
				variant="body1"
				className={
					isSelected ? clsx(classes.selected, classes.hoverable) : classes.hoverable
				}
			>
				{organization.login}
			</Typography>
		</Box>
	);
}

const useStyles = makeStyles(() => ({
	avatar: {
		width: '16px',
		height: '16px',
		borderRadius: 4,
		marginRight: '8px',
	},
	container: {
		display: 'flex',
		alignItems: 'center',
		margin: '8px 0px 8px 0px',
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
