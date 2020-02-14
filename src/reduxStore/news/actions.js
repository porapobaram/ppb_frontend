import * as actionTypes from './actionTypes';
import { barNewsApi } from '../../service/api/news';

export const getNewsFeed = () => async dispatch => {
	dispatch({ type: actionTypes.GET_ALL_NEWS });

	try {
		const data = await barNewsApi.getNewsFeed();
		dispatch({ type: actionTypes.GET_ALL_NEWS_SUCCESS, payload: data });
	} catch (e) {
		dispatch({ type: actionTypes.GET_ALL_NEWS_ERROR });
	}
};

export const updateLikeCounter = (index, data) => dispatch => {
	dispatch({ type: actionTypes.UPDATE_LIKES_COUNTER_SUCCESS, payload: { index, data } });
};
