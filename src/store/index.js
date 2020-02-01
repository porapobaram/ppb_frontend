import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from '../reduxStore/combineReducers';

export default function configureStore(initialState = {}) {
	const middlewares = [thunkMiddleware];

	const enhancers = [applyMiddleware(...middlewares)];

	const store = createStore(allReducers, initialState, composeWithDevTools(...enhancers));

	return store;
}
