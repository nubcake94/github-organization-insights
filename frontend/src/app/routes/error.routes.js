import { SimpleLayout } from 'app/layouts';
import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const errorRoutes = {
	path: '/errors',
	component: SimpleLayout,
	routes: [
		{
			path: '/errors/error-404',
			exact: true,
			component: lazy(() => import('app/pages/error-404')),
		},
		{
			component: () => <Redirect to="/errors/error-404" />,
		},
	],
};

export default errorRoutes;
