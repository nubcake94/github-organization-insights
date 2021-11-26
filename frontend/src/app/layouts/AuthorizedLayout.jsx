import { LinearProgress } from '@material-ui/core';
import { selectAuthState } from 'app/store/slices/auth.slice';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { renderRoutes } from 'react-router-config';

const AuthorizedLayout = ({ route }) => {
	const { token, submitting } = useSelector(selectAuthState);

	if (submitting) {
		return <LinearProgress />;
	}
	if (!submitting && !token) {
		return <Redirect to="/login" />;
	}

	return (
		<>
			<main>
				<Suspense fallback={<LinearProgress />}>{renderRoutes(route.routes)}</Suspense>
			</main>
		</>
	);
};

export default AuthorizedLayout;
