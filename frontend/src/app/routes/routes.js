import appRoutes from './app.routes';
import emptyRoutes from './empty.routes';
import errorRoutes from './error.routes';
import landingRoutes from './landing.routes';

const routes = [errorRoutes, appRoutes, landingRoutes, emptyRoutes];

export default routes;
