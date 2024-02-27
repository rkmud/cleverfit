import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import storage from 'redux-persist/lib/storage';
import { apiSlice } from './slice/api/apiSlice';
import { registSlice } from './slice/regist/registSlice';
import { authSlice } from './slice/auth/authSlice';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import { restoreApiSlice } from './slice/restore/restoreApi';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const { createReduxHistory, routerReducer, routerMiddleware } = createReduxHistoryContext({
    history: createBrowserHistory(),
});

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    [registSlice.reducerPath]: registSlice.reducer,
    auth: authSlice.reducer,
    router: routerReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const history = createBrowserHistory();

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(registSlice.middleware, apiSlice.middleware, routerMiddleware),
});

export const persistor = persistStore(store);
