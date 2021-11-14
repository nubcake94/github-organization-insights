import { LinearProgress } from '@material-ui/core';
import React, { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';

const SimpleLayout = ({ route }) => {
	return (
		<>
			<main>
				<Suspense fallback={<LinearProgress />}>{renderRoutes(route.routes)}</Suspense>
			</main>
		</>
	);
};

export default SimpleLayout;
