import { barApi } from '../../service/api/bar';
import { GET_RANDOM_BAR, SET_BAR_EFFORT } from './actionTypes';

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
