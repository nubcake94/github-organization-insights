import { persistor, store } from 'app/store/store';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import logo from './logo.svg';

export const history = createBrowserHistory({
	basename: process.env.PUBLIC_URL,
});

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://google.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
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
