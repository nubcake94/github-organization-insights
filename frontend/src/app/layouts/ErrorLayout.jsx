import { renderRoutes } from 'react-router-config';

const ErrorLayout = ({ route }) => {
	return (
		<>
			<main>{renderRoutes(route.routes)}</main>
		</>
	);
};

export default ErrorLayout;
