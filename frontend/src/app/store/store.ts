import { configureStore } from '@reduxjs/toolkit';
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
	authReducer,
	organizationReducer,
	profileReducer,
	pullRequestReducer,
	repositoryReducer,
} from './slices';

const authPersistConfig = {
	key: 'github-organization-insights',
	storage,
	whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const store = configureStore({
	reducer: {
		auth: persistedAuthReducer,
		organization: organizationReducer,
		profile: profileReducer,
		repository: repositoryReducer,
		pullRequest: pullRequestReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

const persistor = persistStore(store);

export { store, persistor };
