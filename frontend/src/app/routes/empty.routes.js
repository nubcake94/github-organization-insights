import { SimpleLayout } from 'app/layouts';
import React from 'react';
import { Redirect } from 'react-router-dom';

const emptyRoutes = {
	route: '*',
	component: SimpleLayout,
	routes: [
		{
			component: () => <Redirect to="/" />,
		},
	],
};

export default emptyRoutes;
