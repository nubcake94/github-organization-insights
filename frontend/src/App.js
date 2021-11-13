import { ThemeProvider } from '@material-ui/core';
import routes from 'app/routes';
import { persistor, store } from 'app/store/store';
import GHInsightsTheme from 'app/theme';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

export const history = createBrowserHistory({
	basename: process.env.PUBLIC_URL,
});

function App() {
	return (
		<Router history={history} basename={process.env.PUBLIC_URL}>
			{renderRoutes(routes)}
		</Router>
	);
}

function RootApp() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor} onBeforeLift={() => {}}>
				<ThemeProvider theme={GHInsightsTheme}>
					<App />
				</ThemeProvider>
			</PersistGate>
		</Provider>
	);
}

export default RootApp;
