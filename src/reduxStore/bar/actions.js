import { barApi } from '../../service/api/bar';
import { GET_RANDOM_BAR, SET_BAR_EFFORT } from './actionTypes';
import cookie from 'react-cookies';
import { MAX_EFFORT } from '../../config';

export const getRandomBar = () => async dispatch => {
	const data = await barApi.getRandomBar();
	dispatch({ type: GET_RANDOM_BAR, data });
};

export const setBarEffort = effort => (dispatch, getState) => {
	const getDateExpires = days => {
		const date = new Date();
		date.setDate(date.getDate() + days);
		return date;
	};

	console.log(`11${effort}22${cookie.load('effort')}`);
	if (getState().randomBarReducer.effort === null && cookie.load('effort') !== 'undefined') {
		const effortFromState = Number(cookie.load('effort'));
		if (effortFromState === MAX_EFFORT) {
			dispatch({ type: SET_BAR_EFFORT, disabledButton: true, payload: effortFromState });
		} else {
			dispatch({ type: SET_BAR_EFFORT, disabledButton: false, payload: effortFromState });
		}
	} else if (getState().randomBarReducer.effort === null || cookie.load('effort') === 'undefined') {
		dispatch({ type: SET_BAR_EFFORT, payload: 1 });
		cookie.save('effort', 1, { path: '/' }, { expires: getDateExpires(1) });
	} else if (effort && effort !== MAX_EFFORT) {
		dispatch({ type: SET_BAR_EFFORT, disabledButton: false, payload: effort + 1 });
		cookie.save('effort', effort + 1, { path: '/' }, { expires: getDateExpires(1) });
	} else if (effort === MAX_EFFORT) {
		dispatch({ type: SET_BAR_EFFORT, disabledButton: true, payload: effort });
		cookie.save('effort', getState().randomBarReducer.effort, { path: '/' }, { expires: getDateExpires(1) });
	}
};
