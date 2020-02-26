import { barApi } from '../../service/api/bar';
import { GET_RANDOM_BAR, SET_BAR_EFFORT, ADD_TO_ALL_RANDOM_BARS, INIT_ALL_RANDOM_BARS } from './actionTypes';

export const getRandomBar = () => async dispatch => {
	const data = await barApi.getRandomBar();
	dispatch({ type: GET_RANDOM_BAR, data });
};

export const setBarEffort = effort => dispatch => {
	// const getDateExpires = days => {
	// 	const date = new Date();
	// 	date.setDate(date.getDate() + days);
	// 	return date;
	// };
	dispatch({ type: SET_BAR_EFFORT, payload: effort });
};

export const addRandomBar = data => (dispatch, getState) => {
	dispatch({ type: ADD_TO_ALL_RANDOM_BARS, payload: data });
	const { allRandomBars } = getState().randomBarReducer;
	localStorage.setItem('allBarsShown', encodeURI(JSON.stringify(allRandomBars)));
};

export const initAllRandomBars = data => dispatch => {
	dispatch({ type: INIT_ALL_RANDOM_BARS, payload: data });
};
