import { Box, createStyles, makeStyles } from '@material-ui/core';
import GHInsightsTheme from 'app/theme';
import clsx from 'clsx';
import React from 'react';
import { Helmet } from 'react-helmet';

const sharedStyles = {
	display: 'flex',
	flexDirection: 'column',
} as React.CSSProperties;

const useStyles = makeStyles((theme: typeof GHInsightsTheme) =>
	createStyles({
		fullHeight: {
			...sharedStyles,
			minHeight: '100vh',
			maxHeight: '100vh',
			backgroundColor: theme.palette.background.default,
		},
	})
);

type PageProps = {
	title: string;
	children: React.ReactNode;
	className?: string;
	style: React.CSSProperties;
};

const Page = ({ title, children, style = {}, className = '' }: PageProps) => {
	const classes = useStyles();

	return (
		<Box className={clsx(classes.fullHeight, className)} style={style}>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			{children}
		</Box>
	);
};

export default Page;
