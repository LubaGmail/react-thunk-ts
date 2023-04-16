// Enhances rootReducer with helper functions
import { compose, createStore, applyMiddleware, Middleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import { rootReducer } from './root-reducer';

export type RootState = ReturnType<typeof rootReducer>;

const middleWares = [process.env.NODE_ENV === 'development' && logger, thunk]
  .filter((middleware): middleware is Middleware => Boolean(middleware));

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};
  
const persistConfig: ExtendedPersistConfig = {
  key: 'root',
  storage: storage,             //localstorage
  whitelist: ['cart'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore (
  persistedReducer,
  undefined,
  composedEnhancers
)
export const persistor = persistStore(store)

// with logger middleware
// export const store = createStore(rootReducer, undefined, composedEnhancers);
// export const store = createStore(rootReducer);


