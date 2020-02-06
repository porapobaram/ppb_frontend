import { combineReducers } from 'redux';
import { randomBarReducer as randomBar } from './bar/reducer';

const allReducers = combineReducers({
	randomBar,
});

export default allReducers;
