import routes from 'app/routes';
import { persistor, store } from 'app/store/store';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';

export const history = createBrowserHistory({
	basename: process.env.PUBLIC_URL,
});

function App() {
	return (
		<BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
			{renderRoutes(routes)}
		</BrowserRouter>
	);
}

function RootApp() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor} onBeforeLift={() => {}}>
				<App />
			</PersistGate>
		</Provider>
	);
}

export default RootApp;
