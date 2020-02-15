import { barApi } from '../../service/api/bar';
import { GET_RANDOM_BAR, GET_BAR_EFFORT_COOKIE, SET_BAR_EFFORT, SET_BAR_EFFORT_COOKIE } from './actionTypes';
import cookie from 'react-cookies';

export const getRandomBar = () => async dispatch => {
	const data = await barApi.getRandomBar();
	dispatch({ type: GET_RANDOM_BAR, data });
};

export const setBarEffort = ({ effort }) => dispatch => {
	dispatch({ type: SET_BAR_EFFORT, effort });
};

export const getBarEffortCookies = () => dispatch => {
	const effort = Number(cookie.load('effort'));
	dispatch({ type: GET_BAR_EFFORT_COOKIE, payload: effort });
};

export const setBarEffortCookies = effort => dispatch => {
	cookie.save('effort', effort, { path: '/' });
	dispatch({ type: SET_BAR_EFFORT_COOKIE, effort });
};
