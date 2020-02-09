import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../combineReducers';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory();

export default function configureStore(initialState = {}) {
	const middlewares = [thunkMiddleware, routerMiddleware(history)];

	const enhancers = [applyMiddleware(...middlewares)];

	// TODO: add first param file with all reducers
	return createStore(rootReducer(history), initialState, composeWithDevTools(...enhancers));
}
