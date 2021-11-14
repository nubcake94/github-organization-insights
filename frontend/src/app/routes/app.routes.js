import { SimpleLayout } from 'app/layouts';
import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const appRoutes = {
	path: '/app',
	component: SimpleLayout,
	routes: [
		{
			path: '/app/sandbox',
			exact: true,
			component: lazy(() => import('features/sandbox/Sandbox')),
		},
		{
			component: () => <Redirect to="/errors/error-404" />,
		},
	],
};

export default appRoutes;
