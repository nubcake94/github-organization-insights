import { ErrorLayout } from 'app/layouts';
import React from 'react';
import { Redirect } from 'react-router-dom';

const emptyRoutes = {
	route: '*',
	component: ErrorLayout,
	routes: [
		{
			component: () => <Redirect to="/" />,
		},
	],
};

export default emptyRoutes;
