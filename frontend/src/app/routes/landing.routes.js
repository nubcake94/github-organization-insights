import { SimpleLayout } from 'app/layouts';
import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const landingRoutes = {
	path: '/',
	component: SimpleLayout,
	routes: [
		{
			path: '/',
			exact: true,
			component: lazy(() => import('features/landing/Landing')),
		},
		{
			path: '/login',
			exact: true,
			component: lazy(() => import('features/login/Login')),
		},
		{
			component: () => <Redirect to="/errors/error-404" />,
		},
	],
};

export default landingRoutes;
