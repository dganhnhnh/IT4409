import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import { createBrowserHistory } from 'history';
import createRootReducer from './store/reducers/rootReducer';

export const history = createBrowserHistory({ basename: "" });
const rootReducer = createRootReducer(history);
const reduxStore = createStore(rootReducer);
export const persistor = persistStore(reduxStore);
export default reduxStore;