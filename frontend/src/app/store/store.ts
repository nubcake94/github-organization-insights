import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

const store = configureStore({});

const persistor = persistStore(store);

export { store, persistor };
