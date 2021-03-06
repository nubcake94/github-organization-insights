import { ThemeProvider } from '@material-ui/core';
import routes from 'app/routes';
import { persistor, store } from 'app/store/store';
import GHInsightsTheme from 'app/theme';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
import axiosInstance from './app/store/axiosService';

export const history = createBrowserHistory({
	basename: process.env.PUBLIC_URL,
});

function App() {
	return (
		<Router history={history} basename={process.env.PUBLIC_URL}>
			<ToastContainer limit={1} />
			{renderRoutes(routes)}
		</Router>
	);
}

function RootApp() {
	return (
		<Provider store={store}>
			<PersistGate
				loading={null}
				persistor={persistor}
				onBeforeLift={() => {
					const {
						auth: { token },
					} = store.getState();

					if (token) {
						axiosInstance.refreshRequestHandler(token);
					}
				}}
			>
				<ThemeProvider theme={GHInsightsTheme}>
					<App />
				</ThemeProvider>
			</PersistGate>
		</Provider>
	);
}

export default RootApp;
