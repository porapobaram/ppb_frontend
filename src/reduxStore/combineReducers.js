import { combineReducers } from 'redux';
import { randomBarReducer } from './bar/reducer';
import { barCrawlReducer } from './barCrawl/reducer';
import { barNewsReducer } from './news/reducer';
import { connectRouter } from 'connected-react-router';
import { modalReducer } from './modal/reducer';

export const rootReducer = history =>
	combineReducers({
		router: connectRouter(history),
		randomBarReducer,
		barCrawlReducer,
		barNewsReducer,
		modalReducer,
	});
